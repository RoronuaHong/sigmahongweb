import { React, Component } from 'react'
import { message, Button, Input } from 'antd'
import ReactMarkdown from 'react-markdown'
import { inject, observer } from 'mobx-react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import './index.scss'

@inject('bcppSummaryStore')
@observer
class BCppSummaryEditor extends Component {
  handleTitleInput(value) {
    const { bcppSummaryStore } = this.props

    bcppSummaryStore.setCppSummaryTitleInput(value)
  }

  handlePreviewInput(value) {
    const { bcppSummaryStore } = this.props

    bcppSummaryStore.setCppSummaryPreviewInput(value)
  }

  handleCppSummaryInput(value) {
    const { bcppSummaryStore } = this.props

    bcppSummaryStore.setCppSummaryInput(value)
  }

  handleResetConfirm() {
    const { bcppSummaryStore } = this.props

    bcppSummaryStore.clearCppSummaryInput()
  }

  render() {
    const { bcppSummaryStore } = this.props
    const { title, value, preview } = bcppSummaryStore

    const handleSaveConfirm = async() =>  {
      const { bcppSummaryStore } = this.props
      const { title, value, preview } = bcppSummaryStore
  
      if(title && value) {
        await bcppSummaryStore.setCppSummaryEditorContent({ title, value, preview })
      } else {
        message.error(`plz infilling title and value`)
      }
    }

    return (
      <>
        <div className={`cppsummaryeditor-header`}>
          <div className={`cppsummaryeditor-title`}>
            <Input 
              value={title}
              placeholder={`Title`}
              onChange={e => this.handleTitleInput(e.target.value)}
            />
          </div>
        </div>
        <div className={`cppsummaryeditor-content`}>
          <div className={`cppsummaryeditor-preview`}>
            <Input
              value={preview}
              placeholder={`Preview`}
              onChange={e => this.handlePreviewInput(e.target.value)}
            />
          </div>
        </div>
        <div className={`cppsummaryeditor-wrapper`}>
          <textarea
            autoFocus
            value={value}
            className={`cppsummaryeditor-textarea`}
            onChange={e => this.handleCppSummaryInput(e.target.value)}
          />
          <ReactMarkdown
            source={value}
            className={`cppsummaryeditor-markdown`}
            renderers={{
              code: Components
            }}
          />
        </div>
        <div className={`cppsummaryeditor-confirm-content`}>
          <Button 
            type={`primary`} 
            className={`confirm-save`}
            onClick={handleSaveConfirm}
          >
            保存
          </Button>
          <Button 
            className={`confirm-reset`}
            onClick={() => this.handleResetConfirm()}
          >
            清空
          </Button>
        </div>
      </>
    )
  }
}

const Components = ({ value, language }) => {
  return (
    <SyntaxHighlighter language={language ?? null} style={docco}>
      {value ?? ''}
    </SyntaxHighlighter>
  );
};

export default BCppSummaryEditor
