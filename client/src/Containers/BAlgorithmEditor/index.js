import { React, Component } from 'react'
import { message, Button, Input } from 'antd'
import ReactMarkdown from 'react-markdown'
import { inject, observer } from 'mobx-react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import storageUtils from '../../utils/storageUtils'

import './index.scss'

let id = ``
let isAddPageChange = false

@inject('balgorithmStore')
@observer
class BAlgorithmEditor extends Component {
  async componentWillMount() {
    const { match, balgorithmStore } = this.props
    const path = match.path

    if(path.indexOf(`add`) > -1) {
      storageUtils.removeId()
    } else {
      id = storageUtils.getId()

      await balgorithmStore.getAlgorithmById({ id })

      setTimeout(() => {
        const { gettingTitle, gettingPreview, gettingContent } = balgorithmStore

        this.handleTitleInput(gettingTitle)
        this.handlePreviewInput(gettingPreview)
        this.handleAlgorithmInput(gettingContent)
      }, 1000)
    }
  }

  componentDidUpdate() {
    const { match } = this.props

    if(match.path.indexOf(`add`) > -1) {
      id = ``
      storageUtils.removeId()

      if(!isAddPageChange) {
        this.handleTitleInput(``)
        this.handlePreviewInput(``)
        this.handleAlgorithmInput(``)

        isAddPageChange = true
      }
    } else {
      isAddPageChange = false
    }
  }

  handleTitleInput(value) {
    const { balgorithmStore } = this.props

    balgorithmStore.setAlgorithmTitleInput(value)
  }

  handlePreviewInput(value) {
    const { balgorithmStore } = this.props

    balgorithmStore.setAlgorithmPreviewInput(value)
  }

  handleAlgorithmInput(value) {
    const { balgorithmStore } = this.props

    balgorithmStore.setAlgorithmInput(value)
  }

  handleResetConfirm() {
    const { balgorithmStore } = this.props

    balgorithmStore.clearAlgorithmInput()
  }

  render() {
    const { balgorithmStore } = this.props
    const { title, value, preview } = balgorithmStore

    const handleSaveConfirm = async() =>  {
      const { balgorithmStore } = this.props
      const { title, value, preview } = balgorithmStore
  
      if(id) {
        await balgorithmStore.updateAlgorithmContent({ id, title, value, preview })
      } else {
        if(title && value && preview) {
          await balgorithmStore.setAlgorithmContent({ title, value, preview })
        } else {
          message.error(`plz infilling title and value`)
        }
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
            onChange={e => this.handleAlgorithmInput(e.target.value)}
          />
          <ReactMarkdown
            source={value}
            escapeHtml={false}
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
  )
}

export default BAlgorithmEditor
