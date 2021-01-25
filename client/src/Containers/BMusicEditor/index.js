import { React, Component } from 'react'
import { message, Card, Table } from 'antd'
import { inject, observer } from 'mobx-react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import LinkButton from '../../Widgets/LinkButton'
import storageUtils from '../../utils/storageUtils'

import './index.scss'

let id = ``

@inject('bMusicStore')
@observer
class BUEBasisEditor extends Component {
  async componentWillMount() {
    const { match, bMusicStore } = this.props
    const path = match.path

    id = storageUtils.getId()
    await bMusicStore.getMusicContentById({ id })

    setTimeout(() => {

    })
  }

  handleDelete = id => {
    console.log(id)
  }

  initColumns = () => {
    const columns = [{
      title: 'Content',
      width: 200,
      dataIndex: 'content',
      key: `content`
    }, {
      title: 'Url',
      dataIndex: 'url',
      key: `url`
    }, {
      title: 'Operation',
      width: 200,
      render: (text, record) => {
        return (
          <LinkButton onClick={() => this.handleDelete(record._id)}>Delete</LinkButton>
        )
      },
      dataIndex: 'operation',
      key: `operation`
    }]

    return columns
  }

  render() {
    const { bMusicStore } = this.props
    const { data, gettingData } = bMusicStore

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

    return (
      <Card>
        <Table
          columns={this.initColumns()}
          dataSource={gettingData}
        />
      </Card>
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
