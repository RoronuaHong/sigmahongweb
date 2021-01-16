import { React, Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'antd'

import '../index.scss'
import MyLogo from '../../../assets/Images/MyLogo.png'

import menuList from '../../../config/BmenuConfig'

const { SubMenu } = Menu

class LeftNavContainer extends Component {
  state = {
    collapsed: false
  }

  componentWillMount() {
    this.menuNodes = this.renderMenuList(menuList)
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  renderMenuList = (menuList) => {
    const path = this.props.location.pathname

    return menuList.reduce((pre, item) => {
      if(!item.children) {
        pre.push(
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.key}>
              {item.title}
            </Link>
          </Menu.Item>
        )
      } else {
        const cItem = item.children.find(cItem => cItem.key === path)
        
        if(cItem) {
          this.openKey = item.key
        }

        pre.push(
          <SubMenu key={item.key} title={item.title}>
            {this.renderMenuList(item.children)}
          </SubMenu>
        )
      }

      return pre
    }, [])
  }

  render() {
    // 获取当前路径
    const selectedKey = this.props.location.pathname

    return (
      <div className={`left-nav-wrapper`}>
        <Link className={`left-nav-link`} to={`/home`}>
          <img src={MyLogo} alt={`logo`} />
          <h1>Sigma</h1>
        </Link>
        <Menu
          selectedKeys={[selectedKey]}
          defaultOpenKeys={[this.openKey]}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          {this.menuNodes}
        </Menu>
      </div>
    )
  }
}

export default withRouter(LeftNavContainer)
