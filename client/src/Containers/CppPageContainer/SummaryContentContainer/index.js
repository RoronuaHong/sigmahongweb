import { Layout } from 'antd'
import { Component } from 'react'
import { inject, observer } from 'mobx-react'

import HeaderComponents from '../../../Components/AlgorithmComponents/HeaderComponents/index'
import ArticleContentComponents from '../../../Components/AlgorithmComponents/ArticleContentComponents/index'

import './index.scss'

const { Footer } = Layout

@inject('bcppSummaryStore')
@observer
class SummaryContentContainer extends Component {
  async componentWillMount() {
    const { match, history, bcppSummaryStore } = this.props
    const id = match.params.id

    await bcppSummaryStore.getCppSummaryContentById({ id })

    const { gettingTitle, gettingContent } = bcppSummaryStore

    if(!gettingTitle && !gettingContent) {
      history.replace('/cpp-summary')
    }
  }

  render() {
    const { bcppSummaryStore } = this.props
    const { gettingTitle, gettingContent } = bcppSummaryStore

    return (
      <div className={`summary-wrapper`}>
        <Layout>
          <HeaderComponents title={gettingTitle} />
          <ArticleContentComponents content={gettingContent} />
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

export default SummaryContentContainer
