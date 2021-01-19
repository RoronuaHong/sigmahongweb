import {
  HomeOutlined,
  EditOutlined,
  DeleteOutlined,
  FileAddOutlined,
  FileSearchOutlined,
} from '@ant-design/icons'

const menuList = [{
  title: `Home`,
  key: `/admin/dashboard/home`,
  icon: <HomeOutlined />
}, {
  title: `CppSummaryEditor`,
  key: `/admin/dashboard/cppsummaryeditor`,
  icon: <EditOutlined />,
  children: [{
    title: `Search`,
    key: `/admin/dashboard/cppsummaryeditor/search`,
    icon: <FileSearchOutlined />
  }, {
    title: `Add`,
    key: `/admin/dashboard/cppsummaryeditor/add`,
    icon: <FileAddOutlined />
  }, {
    title: `Edit`,
    key: `/admin/dashboard/cppsummaryeditor/edit`,
    icon: <EditOutlined />
  }]
}]

export default menuList
