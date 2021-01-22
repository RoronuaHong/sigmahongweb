import { Layout } from 'antd'
import { Component } from 'react'
import { inject, observer } from 'mobx-react'

import HeaderComponents from '../../../Components/DataStructureComponents/HeaderComponents/index'
import ArticleContentComponents from '../../../Components/DataStructureComponents/ArticleContentComponents/index'

import './index.scss'

const { Footer } = Layout

@inject('bdatastructureStore')
@observer
class DatastructureContentContainer extends Component {
  async componentWillMount() {
    const { match, history, bdatastructureStore } = this.props
    const id = match.params.id

    await bdatastructureStore.getDatastructureContentById({ id })

    const { gettingTitle, gettingContent } = bdatastructureStore

    if(!gettingTitle && !gettingContent) {
      history.replace('/cpp-datastructure')
    }
  }

  render() {
    const { bdatastructureStore } = this.props
    const { gettingTitle, gettingContent } = bdatastructureStore

    return (
      <div className={`datastructure-wrapper`}>
        <Layout>
          <HeaderComponents title={gettingTitle} />
          <ArticleContentComponents content={gettingContent} />
          <Footer style={{
            textAlign: `center`,
            color: `rgba(0, 0, 0, 0.5)`
          }}>
            SigmaHongWeb DataStructure
          </Footer>
        </Layout>
      </div>
    )
  }
}

export default DatastructureContentContainer
