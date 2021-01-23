import { Layout } from 'antd'
import { Component } from 'react'
import { inject, observer } from 'mobx-react'

import HeaderComponents from '../../../Components/ToolsPageComponents/HeaderComponents/index'
import ArticleContentComponents from '../../../Components/ToolsPageComponents/ArticleContentComponents/index'

import './index.scss'

const { Footer } = Layout

@inject('bChromeStore')
@observer
class ChromeExtensionsContainer extends Component {
  async componentWillMount() {
    const { history, bChromeStore } = this.props

    await bChromeStore.getChromeContentById({ id: `600c16b1f415767b80ed4e9b` })

    const { gettingTitle, gettingContent } = bChromeStore

    if(!gettingTitle && !gettingContent) {
      history.replace('/tools-chrome')
    }
  }

  render() {
    const { bChromeStore } = this.props
    const { gettingTitle, gettingContent } = bChromeStore

    return (
      <div className={`tools-wrapper`}>
        <Layout>
          <HeaderComponents title={gettingTitle} />
          <ArticleContentComponents content={gettingContent} />
          <Footer style={{
            textAlign: `center`,
            color: `rgba(0, 0, 0, 0.5)`
          }}>
            SigmaHongWeb Tools
          </Footer>
        </Layout>
      </div>
    )
  }
}

export default ChromeExtensionsContainer
