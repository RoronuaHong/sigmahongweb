import { React, Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'

import { Card, Button, Table } from 'antd'
import {
  PlusOutlined
} from '@ant-design/icons'

import BMusicList from '../../config/BMusicConfig'
import LinkButton from '../../Widgets/LinkButton'
import storageUtils from '../../utils/storageUtils'

import './index.scss'

@inject('bUEBasisStore')
@observer
class BMusicLists extends Component {
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

  async componentWillMount() {
    
  }

  onSelectChange = selectedRowKeys => {
    this.setState({ selectedRowKeys })
  }

  render() {
    const { bUEBasisStore } = this.props
    const { gettingValue } = bUEBasisStore

    gettingValue && gettingValue.map(item => item.key = item._id)

    const extra = (
      <Link to={`/admin/dashboard/musiceditor/add`}>
        <Button type={`primary`} style={{marginRight: `10px`}}>
          <PlusOutlined /> Add
        </Button>
      </Link>
    )

    return (
      <Card extra={extra}>
        <Table
          columns={this.initColumns()}
          dataSource={BMusicList}
        />
      </Card>
    )
  }
}

export default BMusicLists
