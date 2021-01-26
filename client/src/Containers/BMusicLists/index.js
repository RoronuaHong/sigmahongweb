import { React, Component } from 'react'
import { Card, Table } from 'antd'

import BMusicList from '../../config/BMusicConfig'
import LinkButton from '../../Widgets/LinkButton'
import storageUtils from '../../utils/storageUtils'

import './index.scss'

class BMusicLists extends Component {
  state = {
    selectedRowKeys: []
  }

  handleEdit = id => {
    const { history } = this.props

    storageUtils.saveId(id)

    history.replace(`/admin/dashboard/musiceditor/edit`)
  }

  initColumns = () => {
    const columns = [{
      title: 'Contents',
      dataIndex: 'content',
      key: `content`
    }, {
      title: 'Operation',
      width: 200,
      render: (text, record) => {
        return (
          <LinkButton onClick={() => this.handleEdit(record._id)}>Edit</LinkButton>
        )
      },
      dataIndex: 'operation',
      key: `operation`
    }]

    return columns
  }

  render() {
    const { selectedRowKeys } = this.state

    return (
      <Card>
        <Table
          columns={this.initColumns()}
          dataSource={BMusicList}
        />
      </Card>
    )
  }
}

export default BMusicLists
 