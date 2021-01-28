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
    const { bMusicStore } = this.props

    id = storageUtils.getId()
    await bMusicStore.getMusicContentById({ id })
  }

  handleAddOk = async() => {
    const { bMusicStore } = this.props
    const { gettingData, addingContent, addingArtist, addingUrl, addingImage } = bMusicStore

    const date = (new Date()).getTime()
      
    const data = {
      id: date,
      content: addingContent,
      artist: addingArtist,
      url: addingUrl,
      image: addingImage
    }

    gettingData.push(data)

    await bMusicStore.updateMusicContent({ id, data: JSON.stringify(gettingData) })

    this.setState({ isAddModalVisible: false })
  }

  handleDelete = async(newId) => {
    const { bMusicStore } = this.props
    const { gettingData } = bMusicStore

    const newData = gettingData && gettingData.filter(item => newId !== item.id)

    await bMusicStore.updateMusicContent({ id, data: JSON.stringify(newData) })
  }

  handleAddCancel = () => this.setState({ isAddModalVisible: false })

  handleAddMusicContent = () => this.setState({ isAddModalVisible: true })

  handleSaveMusicContent = async() => {
    const { bMusicStore } = this.props
    const { gettingData } = bMusicStore

    await bMusicStore.updateMusicContent({ id, data: JSON.stringify(gettingData) })
  }

  handleAddContentInput = value => {
    const { bMusicStore } = this.props

    bMusicStore.setAddContentInput(value)
  }

  handleAddArtistInput = value => {
    const { bMusicStore } = this.props

    bMusicStore.setAddArtistInput(value)
  }

  handleAddUrlInput = value => {
    const { bMusicStore } = this.props

    bMusicStore.setAddUrlInput(value)
  }

  handleAddImageInput = value => {
    const { bMusicStore } = this.props

    bMusicStore.setAddImageInput(value)
  }

  initColumns = () => {
    const columns = [{
      title: 'ID',
      width: 50,
      dataIndex: 'id',
      key: `id`,
    }, {
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
            onChange={e => {
              const { bMusicStore } = this.props
              const { gettingData } = bMusicStore

              gettingData.map(item => {
                if(item.id === record.id) {
                  item.content = e.target.value
                }
              })
            }}
          />
        )
      }
    }, {
      title: 'Artist',
      dataIndex: 'artist',
      key: `artist`,
      render: (text, record) => {
        return (
          <Input
            key={text}
            defaultValue={record.artist}
            placeholder={`Artist`}
            onChange={e => {
              const { bMusicStore } = this.props
              const { gettingData } = bMusicStore

              gettingData.map(item => {
                if(item.id === record.id) {
                  item.artist = e.target.value
                }
              })
            }}
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
            onChange={e => {
              const { bMusicStore } = this.props
              const { gettingData } = bMusicStore

              gettingData.map(item => {
                if(item.id === record.id) {
                  item.url = e.target.value
                }
              })
            }}
          />
        )
      }
    }, {
      title: 'Image',
      dataIndex: 'image',
      key: `image`,
      render: (text, record) => {
        return (
          <Input
            key={text}
            defaultValue={record.image}
            placeholder={`Image`}
            onChange={e => {
              const { bMusicStore } = this.props
              const { gettingData } = bMusicStore

              gettingData.map(item => {
                if(item.id === record.id) {
                  item.image = e.target.value
                }
              })
            }}
          />
        )
      }
    }, {
      title: 'Operation',
      width: 200,
      render: (text, record) => {
        return (
          <LinkButton onClick={() => this.handleDelete(record.id)}>Delete</LinkButton>
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
    const { addingContent, addingArtist, addingUrl, addingImage, gettingData } = bMusicStore

    gettingData && gettingData.map(item => item.key = item.id)

    const extra = (
      <>
        <Button 
          style={{marginRight: `10px`}}
          onClick={this.handleAddMusicContent}
        >
          <PlusOutlined /> Add
        </Button>
        <Button
          type={`primary`}
          style={{marginRight: `10px`}}
          onClick={this.handleSaveMusicContent}
        >
          <SaveOutlined /> Save
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
            key={`artist`}
            value={addingArtist}
            placeholder={`Artist`}
            onChange={e => this.handleAddArtistInput(e.target.value)}
          />
          &nbsp;&nbsp;&nbsp;
          <Input
            key={`url`}
            value={addingUrl}
            placeholder={`Url`}
            onChange={e => this.handleAddUrlInput(e.target.value)}
          />
          &nbsp;&nbsp;&nbsp;
          <Input
            key={`image`}
            value={addingImage}
            placeholder={`Image`}
            onChange={e => this.handleAddImageInput(e.target.value)}
          />
        </Modal>
    </>
    )
  }
}

export default BUEBasisEditor
