import { Component } from 'react'
import { Layout } from 'antd'
import { Redirect, Switch, Route } from 'react-router-dom'

import storageUtils from '../../utils/storageUtils'

import LeftNavContainer from './LeftNavContainer/index'
import HeaderContainer from './HeaderContainer/index'

import BHomeContainer from '../BHomeContainer/index'

import BCppSummaryEditor from '../BCppSummaryEditor/index'
import BCppSummaryLists from '../BCppSummaryLists/index'

import BAlgorithmEditor from '../BAlgorithmEditor/index'
import BAlgorithmLists from '../BAlgorithmLists/index'

import BDataStructureEditor from '../BDataStructureEditor/index'
import BDataStructureLists from '../BDataStructureLists/index'

import BUEBasisEditor from '../BUEBasisEditor/index'
import BUEBasisLists from '../BUEBasisLists/index'

import BChromeExtensionsEditor from '../BChromeExtensionsEditor/index'

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
          <Content style={{
            margin: `10px 20px`,
            background: `white`
          }}>
            <Switch>
              <Route path={`/admin/dashboard/home`} component={BHomeContainer} />
              <Route path={`/admin/dashboard/cppsummaryeditor/search`} component={BCppSummaryLists} />
              <Route path={`/admin/dashboard/cppsummaryeditor/add`} component={BCppSummaryEditor} />
              <Route path={`/admin/dashboard/cppsummaryeditor/edit`} component={BCppSummaryEditor} />

              <Route path={`/admin/dashboard/algorithmeditor/search`} component={BAlgorithmLists} />
              <Route path={`/admin/dashboard/algorithmeditor/add`} component={BAlgorithmEditor} />
              <Route path={`/admin/dashboard/algorithmeditor/edit`} component={BAlgorithmEditor} />

              <Route path={`/admin/dashboard/datastructureeditor/search`} component={BDataStructureLists} />
              <Route path={`/admin/dashboard/datastructureeditor/add`} component={BDataStructureEditor} />
              <Route path={`/admin/dashboard/datastructureeditor/edit`} component={BDataStructureEditor} />

              <Route path={`/admin/dashboard/uebasiseditor/search`} component={BUEBasisLists} />
              <Route path={`/admin/dashboard/uebasiseditor/add`} component={BUEBasisEditor} />
              <Route path={`/admin/dashboard/uebasiseditor/edit`} component={BUEBasisEditor} />

              <Route path={`/admin/dashboard/chromeeditor/content`} component={BChromeExtensionsEditor} />

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
