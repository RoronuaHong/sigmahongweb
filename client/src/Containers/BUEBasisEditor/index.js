import { React, Component } from 'react'
import { message, Button, Input, Switch } from 'antd'
import ReactMarkdown from 'react-markdown'
import { inject, observer } from 'mobx-react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import storageUtils from '../../utils/storageUtils'

import './index.scss'

let id = ``
let isAddPageChange = false

@inject('bUEBasisStore')
@observer
class BUEBasisEditor extends Component {
  async componentWillMount() {
    const { match, bUEBasisStore } = this.props
    const path = match.path

    if(path.indexOf(`add`) > -1) {
      this.handleTitleInput(``)
      this.handlePreviewInput(``)
      this.handleUEBasisInput(``)

      storageUtils.removeId()
    } else {
      id = storageUtils.getId()

      await bUEBasisStore.getUEBasisContentById({ id })

      setTimeout(() => {
        const { gettingTitle, gettingPreview, gettingContent } = bUEBasisStore

        this.handleTitleInput(gettingTitle)
        this.handlePreviewInput(gettingPreview)
        this.handleUEBasisInput(gettingContent)
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
        this.handleUEBasisInput(``)

        isAddPageChange = true
      }
    } else {
      isAddPageChange = false
    }
  }

  handleTitleInput(value) {
    const { bUEBasisStore } = this.props

    bUEBasisStore.setUEBasisTitleInput(value)
  }

  handlePreviewInput(value) {
    const { bUEBasisStore } = this.props

    bUEBasisStore.setUEBasisPreviewInput(value)
  }

  handleUEBasisInput(value) {
    const { bUEBasisStore } = this.props

    bUEBasisStore.setUEBasisInput(value)
  }

  handleResetConfirm() {
    const { bUEBasisStore } = this.props

    bUEBasisStore.clearUEBasisInput()
  }

  render() {
    const { bUEBasisStore } = this.props
    const { title, value, preview, gettingTop } = bUEBasisStore

    const handleSaveConfirm = async() =>  {
      const { bUEBasisStore } = this.props
      const { title, value, preview, top } = bUEBasisStore

      if(id) {
        await bUEBasisStore.updateUEBasisContent({ id, title, value, preview, top })
      } else {
        if(title && value && preview) {
          await bUEBasisStore.setUEBasisContent({ title, value, preview, top })
        } else {
          message.error(`plz infilling title and value`)
        }
      }
    }

    const onSwitchChange = (checked) => {
      const { bUEBasisStore } = this.props

      bUEBasisStore.setUEBasisTop(checked)
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
            onChange={e => this.handleUEBasisInput(e.target.value)}
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
          &nbsp;&nbsp;&nbsp;
          <span>置顶&nbsp;:</span>&nbsp;&nbsp;&nbsp;
          <Switch checked={gettingTop} onChange={onSwitchChange} />
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

export default BUEBasisEditor
