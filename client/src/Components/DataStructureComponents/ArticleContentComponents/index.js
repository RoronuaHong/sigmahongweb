import { Component } from 'react'

import ReactMarkdown from 'react-markdown'
import MarkdownNavbar from 'markdown-navbar'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import 'markdown-navbar/dist/navbar.css'

class ArticleContentComponents extends Component {
  render() {
    const { content } = this.props

    return (
      <div className={`algorithm-content`}>
        <div className={`content-left`}>
          <MarkdownNavbar source={content} />
        </div>
        <div className={`content-main content-overflow`}>
          <ReactMarkdown 
            source={content} 
            escapeHtml={false}
            renderers={{
              code: Components
            }}
            className={`cppsummaryeditor-markdown`}
          ></ReactMarkdown>
        </div>
        <div className={`content-right`}></div>
      </div>
    )
  }
}

const Components = ({ value, language }) => {
  return (
    <SyntaxHighlighter language={language ?? null} style={docco}>
      {value ?? ''}
    </SyntaxHighlighter>
  )
}

export default ArticleContentComponents
