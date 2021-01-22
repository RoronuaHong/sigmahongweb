import { Layout } from 'antd'
import { Component } from 'react'
import { inject, observer } from 'mobx-react'

import CppSummaryListComponents from '../../../Components/CppPageComponents/CppSummaryListComponents/index'
import HeaderComponents from '../../../Components/CppPageComponents/HeaderComponents/index'
import ContentComponents from '../../../Components/CppPageComponents/ContentComponents/index'

import './index.scss'

const { Footer } = Layout

@inject('bdatastructureStore')
@observer
class SummaryContainer extends Component {
  render() {
    return (
      <div className={`summary-wrapper`}>
        <Layout>
          <HeaderComponents />
          <ContentComponents>
            <CppSummaryListComponents />
          </ContentComponents>
          <Footer style={{
            textAlign: `center`,
            color: `rgba(0, 0, 0, 0.5)`
          }}>
            SigmaHongWeb CppSummary
          </Footer>
        </Layout>
      </div>
    )
  }
}

export default SummaryContainer
