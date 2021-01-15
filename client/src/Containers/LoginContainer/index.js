import './index.scss'
import logo from '../../assets/Images/MyLogo.png'

import { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {Form, Input, Button, message} from 'antd'
import { inject, observer } from 'mobx-react'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import storageUtils from '../../utils/storageUtils'

const Item = Form.Item

@inject('loginStore')
@observer
class LoginContainer extends Component {
  render() {
    const user = storageUtils.getUser()

    if(user._id) {
      return <Redirect to='/admin/dashboard' />
    }

    let { loginStore } = this.props

    const onFinish = async (values) => {
      await loginStore.getLoginUser(values)

      if(loginStore.loginStatus.isLogin) {
        storageUtils.saveUser(loginStore.loginStatus.data)

        message.success(loginStore.loginStatus.msg, 2).then(() => {
          this.props.history.replace('/admin/dashboard')
        })
      } else {
        message.error(loginStore.loginStatus.msg)
      }
    }

    return (
      <div className='wrapper'>
        <div className='login-wrapper'>
          <div className='login-header'>
            <img src={logo} alt={`Logo`} />
            <h1>SimgaHongWeb's Management</h1>
          </div>
          <div className={`login-content`}>
            <h1>Sign In</h1>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
              </Item>
              <Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Item>
              <Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
              </Item>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginContainer
