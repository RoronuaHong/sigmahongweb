import { React, Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'

import moment from 'moment'
import { Card, Button, Table } from 'antd'
import {
  PlusOutlined,
  DeleteOutlined
} from '@ant-design/icons'

import LinkButton from '../../Widgets/LinkButton'
import storageUtils from '../../utils/storageUtils'

import './index.scss'

@inject('bcppSummaryStore')
@observer
class BAlgorithmLists extends Component {
  state = {
    selectedRowKeys: [],
  }

  handleEdit = id => {
    const { history } = this.props

    storageUtils.saveId(id)

    history.replace(`/admin/dashboard/cppsummaryeditor/edit`)
  }

  handleDelete = id => {
    const { bcppSummaryStore } = this.props

    bcppSummaryStore.delCppSummaryEditorContent({ id })
  }

  initColumns = () => {
    const columns = [{
      title: 'Title',
      dataIndex: 'title',
      key: `title`
    }, {
      title: 'Preview',
      dataIndex: 'preview',
      key: `preview`
    }, {
      title: 'Time',
      render: text => {
        return moment(text).format(`YYYY-MM-DD hh:mm:ss`)
      },
      dataIndex: 'createdAt',
      key: `createdAt`
    }, {
      title: 'Operation',
      width: 200,
      render: (text, record) => {
        return (
          <>
            <LinkButton onClick={() => this.handleEdit(record._id)}>Edit</LinkButton>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <LinkButton onClick={() => this.handleDelete(record._id)}>Delete</LinkButton>
          </>
        )
      },
      dataIndex: 'operation',
      key: `operation`
    }]

    return columns
  }

  async componentWillMount() {
    const { bcppSummaryStore } = this.props

    await bcppSummaryStore.getCppSummaryEditorContent()
  }

  onSelectChange = selectedRowKeys => {
    this.setState({ selectedRowKeys })
  }

  onDeleteChange = () => {
    const { selectedRowKeys } = this.state
    
    console.log(selectedRowKeys)
  }

  render() {
    const { selectedRowKeys } = this.state
    const { bcppSummaryStore } = this.props
    const { gettingValue } = bcppSummaryStore

    gettingValue && gettingValue.map(item => item.key = item._id)

    const extra = (
      <>
        <Link to={`/admin/dashboard/cppsummaryeditor/add`}>
          <Button type={`primary`} style={{marginRight: `10px`}}>
            <PlusOutlined /> Add
          </Button>
        </Link>
        {selectedRowKeys.length ?
          <Button danger onClick={this.onDeleteChange}>
            <DeleteOutlined /> Delete
          </Button> : ``}
      </>
    )

    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      selections: [
        Table.SELECTION_ALL,
        Table.SELECTION_INVERT,
        Table.SELECTION_NONE,
        {
          key: 'odd',
          text: 'Select Odd Row',
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = []

            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if(index % 2 !== 0) {
                return false
              }

              return true
            })

            this.setState({ selectedRowKeys: newSelectedRowKeys })
          },
        },
        {
          key: 'even',
          text: 'Select Even Row',
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = []

            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if(index % 2 !== 0) {
                return true
              }

              return false
            })

            this.setState({ selectedRowKeys: newSelectedRowKeys })
          },
        },
      ]
    }

    return (
      <Card extra={extra}>
        <Table
          columns={this.initColumns()}
          dataSource={gettingValue}
          rowSelection={rowSelection} 
        />
      </Card>
    )
  }
}

export default BAlgorithmLists
