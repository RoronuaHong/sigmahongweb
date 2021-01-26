import { React, Component } from 'react'
import { message, Card, Table, Input, Button, Modal } from 'antd'
import { inject, observer } from 'mobx-react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import {
  PlusOutlined,
  SaveOutlined,
} from '@ant-design/icons'

import LinkButton from '../../Widgets/LinkButton'
import storageUtils from '../../utils/storageUtils'

import './index.scss'

let id = ``

@inject('bMusicStore')
@observer
class BUEBasisEditor extends Component {
  state = {
    isAddModalVisible: false,
  }

  async componentWillMount() {
    const { match, bMusicStore } = this.props
    const path = match.path

    id = storageUtils.getId()
    await bMusicStore.getMusicContentById({ id })
  }

  handleAddOk = async() => {
    const { bMusicStore } = this.props
    const { gettingData, addingContent, addingUrl } = bMusicStore
    const data = {
      content: addingContent,
      url: addingUrl
    }

    gettingData.push(data)

    await bMusicStore.updateMusicContent({ id, data: JSON.stringify(gettingData) })

    this.setState({
      isAddModalVisible: false
    })
  }

  handleDelete = async(content) => {
    const { bMusicStore } = this.props
    const { gettingData } = bMusicStore

    const newData = gettingData && gettingData.filter(item => content !== item.content)

    await bMusicStore.updateMusicContent({ id, data: JSON.stringify(newData) })
  }

  handleAddCancel = () => {
    this.setState({
      isAddModalVisible: false
    })
  }

  handleAddMusicContent = () => {
    const { bMusicStore } = this.props
    const { gettingData } = bMusicStore

    this.setState({
      isAddModalVisible: true
    })
  }

  handleAddContentInput = value => {
    const { bMusicStore } = this.props

    bMusicStore.setAddContentInput(value)
  }

  handleAddUrlInput = value => {
    const { bMusicStore } = this.props

    bMusicStore.setAddUrlInput(value)
  }

  initColumns = () => {
    const columns = [{
      title: 'Content',
      width: 200,
      dataIndex: 'content',
      key: `content`,
      render: (text, record) => {
        return (
          <Input
            key={text}
            defaultValue={record.content}
            placeholder={`Content`}
          />
        )
      }
    }, {
      title: 'Url',
      dataIndex: 'url',
      key: `url`,
      render: (text, record) => {
        return (
          <Input
            key={text}
            defaultValue={record.url}
            placeholder={`Url`}
          />
        )
      }
    }, {
      title: 'Operation',
      width: 200,
      render: (text, record) => {
        return (
          <LinkButton onClick={() => this.handleDelete(record.content)}>Delete</LinkButton>
        )
      },
      dataIndex: 'operation',
      key: `operation`
    }]

    return columns
  }

  render() {
    const { isAddModalVisible } = this.state
    const { bMusicStore } = this.props
    const { data, addingContent, addingUrl, gettingData } = bMusicStore

    gettingData && gettingData.map(item => item.key = item.content)

    const handleSaveConfirm = async() =>  {
      const { bMusicStore } = this.props
      const { gettingData } = bMusicStore

      message.destroy()

      // FIXME: 更新歌曲数量
      if(id) {
        await bMusicStore.updateMusicContent({ data })
      } else {
        message.error(`id isn't exist`)
      }
    }

    const extra = (
      <>
        <Button 
          style={{marginRight: `10px`}}
          onClick={this.handleAddMusicContent}
        >
          <PlusOutlined /> Add
        </Button>
      </>
    )

    return (
      <>
        <Card extra={extra}>
          <Table
            columns={this.initColumns()}
            dataSource={gettingData}
          />
        </Card>
        <Modal
          title={`Add Music`}
          visible={isAddModalVisible}
          onOk={this.handleAddOk}
          onCancel={this.handleAddCancel}
        >
          <Input
            key={`content`}
            value={addingContent}
            placeholder={`Content`}
            onChange={e => this.handleAddContentInput(e.target.value)}
          />
          &nbsp;&nbsp;&nbsp;
          <Input
            key={`url`}
            value={addingUrl}
            placeholder={`Url`}
            onChange={e => this.handleAddUrlInput(e.target.value)}
          />
        </Modal>
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
