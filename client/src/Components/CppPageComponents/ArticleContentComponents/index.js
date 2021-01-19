import { Component } from 'react'

import ReactMarkdown from 'react-markdown'
import MarkdownNavbar from 'markdown-navbar'

import 'markdown-navbar/dist/navbar.css'

class ArticleContentComponents extends Component {
  render() {
    const { content } = this.props

    return (
      <div className={`summary-content`}>
        <div className={`content-left`}>
          <MarkdownNavbar source={content} />
        </div>
        <div className={`content-main`}>
          <ReactMarkdown source={content} escapeHtml={false}></ReactMarkdown>
        </div>
        <div className={`content-right`}>
          
        </div>
      </div>
    )
  }
}

export default ArticleContentComponents
