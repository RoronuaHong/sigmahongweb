import { Layout } from 'antd'
import { Component } from 'react'
import { inject, observer } from 'mobx-react'

import HeaderComponents from '../../../Components/CppPageComponents/HeaderComponents/index'
import ArticleContentComponents from '../../../Components/CppPageComponents/ArticleContentComponents/index'

import './index.scss'

const { Footer } = Layout

@inject('bcppSummaryStore')
@observer
class SummaryContentContainer extends Component {
  componentWillMount() {
    const { match, bcppSummaryStore } = this.props
    const id = match.params.id

    bcppSummaryStore.getCppSummaryContentById({ id })
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
