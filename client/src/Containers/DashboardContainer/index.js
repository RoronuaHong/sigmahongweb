import { Component } from 'react'
import { Layout } from 'antd'
import { Redirect, Switch, Route } from 'react-router-dom'

import logo from '../../assets/Images/logo.svg'
import storageUtils from '../../utils/storageUtils'

import LeftNavContainer from './LeftNavContainer/index'
import HeaderContainer from './HeaderContainer/index'

import BHomeContainer from '../BHomeContainer/index'
import BCppSummaryEditor from '../BCppSummaryEditor/index'

const { Footer, Sider, Content } = Layout

class DashboardContainer extends Component {
  render() {
    const user = storageUtils.getUser()

    if(!user._id) {
      return <Redirect to='/admin/login' />
    }

    return (
      <Layout style={{ height: `100%` }}>
        <Sider style={{ width: `300px` }}>
          <LeftNavContainer />
        </Sider>
        <Layout>
          <HeaderContainer />
          <Content style={{ background: `white` }}>
            <Switch>
              <Route path={`/admin/dashboard/home`} component={BHomeContainer} />
              <Route path={`/admin/dashboard/cppsummaryeditor`} component={BCppSummaryEditor} />
              <Redirect to={`/admin/dashboard/home`} />
            </Switch>
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
