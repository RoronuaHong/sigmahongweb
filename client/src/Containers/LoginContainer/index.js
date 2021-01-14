import './index.scss'
import logo from '../../Images/MyLogo.png'

import { Component } from 'react'
import {Form, Input, Button} from 'antd'
import { inject, observer } from 'mobx-react'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const Item = Form.Item

@inject('loginStore')
@observer
class LoginContainer extends Component {
  render() {
    let { loginStore } = this.props

    const onFinish = (values) => {
      loginStore.getLoginUser({ values })
      
      console.log('Received values of form: ', values)
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
