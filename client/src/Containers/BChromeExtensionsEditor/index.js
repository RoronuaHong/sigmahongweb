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

@inject('bChromeStore')
@observer
class BDataStructureEditor extends Component {
  async componentWillMount() {
    const { match, bChromeStore } = this.props
    const path = match.path

    if(path.indexOf(`add`) > -1) {
      this.handleTitleInput(``)
      this.handlePreviewInput(``)
      this.handleChromeInput(``)

      storageUtils.removeId()
    } else {
      id = storageUtils.getId()

      await bChromeStore.getChromeContentById({ id })

      setTimeout(() => {
        const { gettingTitle, gettingPreview, gettingContent } = bChromeStore

        this.handleTitleInput(gettingTitle)
        this.handlePreviewInput(gettingPreview)
        this.handleChromeInput(gettingContent)
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
        this.handleChromeInput(``)

        isAddPageChange = true
      }
    } else {
      isAddPageChange = false
    }
  }

  handleTitleInput(value) {
    const { bChromeStore } = this.props

    bChromeStore.setChromeTitleInput(value)
  }

  handlePreviewInput(value) {
    const { bChromeStore } = this.props

    bChromeStore.setChromePreviewInput(value)
  }

  handleChromeInput(value) {
    const { bChromeStore } = this.props

    bChromeStore.setChromeInput(value)
  }

  handleResetConfirm() {
    const { bChromeStore } = this.props

    bChromeStore.clearChromeInput()
  }

  render() {
    const { bChromeStore } = this.props
    const { title, value, preview } = bChromeStore

    const handleSaveConfirm = async() =>  {
      const { bChromeStore } = this.props
      const { title, value, preview } = bChromeStore
  
      if(id) {
        await bChromeStore.updateChromeContent({ id, title, value, preview })
      } else {
        if(title && value && preview) {
          await bChromeStore.setChromeContent({ title, value, preview })
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
            onChange={e => this.handleChromeInput(e.target.value)}
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

export default BDataStructureEditor
