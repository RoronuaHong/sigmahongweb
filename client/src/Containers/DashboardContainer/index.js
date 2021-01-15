import { Component } from 'react'
import { Layout } from 'antd'
import { Redirect } from 'react-router-dom'

import logo from '../../Images/logo.svg'
import storageUtils from '../../utils/storageUtils'

import LeftNavContainer from './LeftNavContainer/index'
import HeaderContainer from './HeaderContainer/index'

import BHomeContainer from '../BHomeContainer/index'

const { Footer, Sider, Content } = Layout

class DashboardContainer extends Component {
  render() {
    const user = storageUtils.getUser()

    if(!user._id) {
      return <Redirect to='/admin/login' />
    }

    return (
      <Layout style={{ height: `100%` }}>
        <Sider>
          <LeftNavContainer />
        </Sider>
        <Layout>
          <HeaderContainer />
          <Content style={{ background: `white` }}>
            <BHomeContainer />
          </Content>
          <Footer style={{
            textAlign: `center`,
            color: `rgba(0, 0, 0, 0.5)`
          }}>
            SigmaHongWeb Management
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default DashboardContainer
