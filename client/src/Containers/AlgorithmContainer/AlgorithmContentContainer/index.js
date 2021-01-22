import { Layout } from 'antd'
import { Component } from 'react'
import { inject, observer } from 'mobx-react'

import HeaderComponents from '../../../Components/CppPageComponents/HeaderComponents/index'
import ArticleContentComponents from '../../../Components/CppPageComponents/ArticleContentComponents/index'

import './index.scss'

const { Footer } = Layout

@inject('balgorithmStore')
@observer
class SummaryContentContainer extends Component {
  async componentWillMount() {
    const { match, history, balgorithmStore } = this.props
    const id = match.params.id

    await balgorithmStore.getAlgorithmById({ id })

    const { gettingTitle, gettingContent } = balgorithmStore

    if(!gettingTitle && !gettingContent) {
      history.replace('/cpp-summary')
    }
  }

  render() {
    const { balgorithmStore } = this.props
    const { gettingTitle, gettingContent } = balgorithmStore

    return (
      <div className={`summary-wrapper`}>
        <Layout>
          <HeaderComponents title={gettingTitle} />
          <ArticleContentComponents content={gettingContent} />
          <Footer style={{
            textAlign: `center`,
            color: `rgba(0, 0, 0, 0.5)`
          }}>
            SigmaHongWeb Algorithm
          </Footer>
        </Layout>
      </div>
    )
  }
}

export default SummaryContentContainer
