import { Layout } from 'antd'
import { Component } from 'react'
import { inject, observer } from 'mobx-react'

import HeaderComponents from '../../../Components/UEProdComponents/HeaderComponents/index'
import ArticleContentComponents from '../../../Components/UEProdComponents/ArticleContentComponents/index'

import './index.scss'

const { Footer } = Layout

@inject('bUEProdStore')
@observer
class UEProdContentContainer extends Component {
  async componentWillMount() {
    const { match, history, bUEProdStore } = this.props
    const id = match.params.id

    await bUEProdStore.getUEProdContentById({ id })

    const { gettingTitle, gettingContent } = bUEProdStore

    if(!gettingTitle && !gettingContent) {
      history.replace('/ue-production')
    }
  }

  render() {
    const { bUEProdStore } = this.props
    const { gettingTitle, gettingContent } = bUEProdStore

    return (
      <div className={`ue-wrapper`}>
        <Layout>
          <HeaderComponents title={gettingTitle} />
          <ArticleContentComponents content={gettingContent} />
          <Footer style={{
            textAlign: `center`,
            color: `rgba(0, 0, 0, 0.5)`
          }}>
            SigmaHongWeb UEProd
          </Footer>
        </Layout>
      </div>
    )
  }
}

export default UEProdContentContainer
