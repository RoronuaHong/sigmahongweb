import { Layout } from 'antd'
import { Component } from 'react'
import { inject, observer } from 'mobx-react'

import UEListComponents from '../../../Components/UEProdComponents/UEListComponents/index'
import HeaderComponents from '../../../Components/UEProdComponents/HeaderComponents/index'
import ContentComponents from '../../../Components/UEProdComponents/ContentComponents/index'

import './index.scss'

const { Footer } = Layout

@inject('bUEProdStore')
@observer
class UEProdListsContainer extends Component {
  render() {
    return (
      <div className={`ue-wrapper`}>
        <Layout>
          <HeaderComponents />
          <ContentComponents>
            <UEListComponents />
          </ContentComponents>
          <Footer style={{
            textAlign: `center`,
            color: `rgba(0, 0, 0, 0.5)`
          }}>
            SigmaHongWeb UE Production
          </Footer>
        </Layout>
      </div>
    )
  }
}

export default UEProdListsContainer
