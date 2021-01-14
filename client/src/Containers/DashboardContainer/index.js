import { Component } from 'react'
import ProLayout, { PageContainer } from '@ant-design/pro-layout'
import logo from '../../Images/logo.svg'

class DashboardContainer extends Component {
  render() {
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
