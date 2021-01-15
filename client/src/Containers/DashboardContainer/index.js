import { Component } from 'react'
import { Redirect } from 'react-router-dom'
import ProLayout, { PageContainer } from '@ant-design/pro-layout'

import logo from '../../Images/logo.svg'
import storageUtils from '../../utils/storageUtils'

class DashboardContainer extends Component {
  render() {
    const user = storageUtils.getUser()

    if(!user._id) {
      return <Redirect to='/admin/login' />
    }

    return (
      <ProLayout
        logo={logo}
      >
        <PageContainer>
          
        </PageContainer>
      </ProLayout>
    )
  }
}

export default DashboardContainer
