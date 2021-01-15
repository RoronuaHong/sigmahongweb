import { React, Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon, Button } from 'antd'
import {
  HomeOutlined
} from '@ant-design/icons'

import '../index.scss'
import MyLogo from '../../../assets/Images/MyLogo.png'

const { SubMenu } = Menu

class LeftNavContainer extends Component {
  state = {
    collapsed: false,
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    return (
      <div className={`left-nav-wrapper`}>
        <Link className={`left-nav-link`} to={`/home`}>
          <img src={MyLogo} alt={`logo`} />
          <h1>Sigma</h1>
        </Link>
        <Menu
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="/admin/dashboard/home" icon={<HomeOutlined />}>
            <Link to={`/admin/dashboard/home`}>
              Option 1
            </Link>
          </Menu.Item>
          <Menu.Item key="/admin/dashboard/cppsummaryeditor">
            <Link to={`/admin/dashboard/cppsummaryeditor`}>
              Option 2
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            Option 3
          </Menu.Item>
          <SubMenu key="sub1" title="Navigation One">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}

export default LeftNavContainer