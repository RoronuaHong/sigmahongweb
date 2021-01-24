import { Layout } from 'antd'
import { Component } from 'react'
import { inject, observer } from 'mobx-react'

import HeaderComponents from '../../../Components/UEPageComponents/HeaderComponents/index'
import ArticleContentComponents from '../../../Components/UEPageComponents/ArticleContentComponents/index'

import './index.scss'

const { Footer } = Layout

@inject('bUEBasisStore')
@observer
class UEProdContentContainer extends Component {
  async componentWillMount() {
    const { match, history, bUEBasisStore } = this.props
    const id = match.params.id

    await bUEBasisStore.getUEBasisContentById({ id })

    const { gettingTitle, gettingContent } = bUEBasisStore

    if(!gettingTitle && !gettingContent) {
      history.replace('/ue-production')
    }
  }

  render() {
    const { bUEBasisStore } = this.props
    const { gettingTitle, gettingContent } = bUEBasisStore

    return (
      <div className={`ue-wrapper`}>
        <Layout>
          <HeaderComponents title={gettingTitle} />
          <ArticleContentComponents content={gettingContent} />
          <Footer style={{
            textAlign: `center`,
            color: `rgba(0, 0, 0, 0.5)`
          }}>
            SigmaHongWeb UEBasis
          </Footer>
        </Layout>
      </div>
    )
  }
}

export default UEProdContentContainer
