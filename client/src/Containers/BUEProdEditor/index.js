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

@inject('bUEProdStore')
@observer
class BUEProdEditor extends Component {
  async componentWillMount() {
    const { match, bUEProdStore } = this.props
    const path = match.path

    if(path.indexOf(`add`) > -1) {
      this.handleTitleInput(``)
      this.handlePreviewInput(``)
      this.handleUEProdInput(``)

      storageUtils.removeId()
    } else {
      id = storageUtils.getId()

      await bUEProdStore.getUEProdContentById({ id })

      setTimeout(() => {
        const { gettingTitle, gettingPreview, gettingContent } = bUEProdStore

        this.handleTitleInput(gettingTitle)
        this.handlePreviewInput(gettingPreview)
        this.handleUEProdInput(gettingContent)
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
        this.handleUEProdInput(``)

        isAddPageChange = true
      }
    } else {
      isAddPageChange = false
    }
  }

  handleTitleInput(value) {
    const { bUEProdStore } = this.props

    bUEProdStore.setUEProdTitleInput(value)
  }

  handlePreviewInput(value) {
    const { bUEProdStore } = this.props

    bUEProdStore.setUEProdPreviewInput(value)
  }

  handleUEProdInput(value) {
    const { bUEProdStore } = this.props

    bUEProdStore.setUEProdInput(value)
  }

  handleResetConfirm() {
    const { bUEProdStore } = this.props

    bUEProdStore.clearUEProdInput()
  }

  render() {
    const { bUEProdStore } = this.props
    const { title, value, preview } = bUEProdStore

    const handleSaveConfirm = async() =>  {
      const { bUEProdStore } = this.props
      const { title, value, preview } = bUEProdStore
  
      if(id) {
        await bUEProdStore.updateUEProdContent({ id, title, value, preview })
      } else {
        if(title && value && preview) {
          await bUEProdStore.setUEProdContent({ title, value, preview })
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
            onChange={e => this.handleUEProdInput(e.target.value)}
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

export default BUEProdEditor
