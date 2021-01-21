import {
  HomeOutlined,
  EditOutlined,
  FileAddOutlined,
  UnorderedListOutlined,
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
    title: `List`,
    key: `/admin/dashboard/cppsummaryeditor/search`,
    icon: <UnorderedListOutlined />
  }, {
    title: `Add`,
    key: `/admin/dashboard/cppsummaryeditor/add`,
    icon: <FileAddOutlined />
  }, {
    title: `Edit`,
    key: `/admin/dashboard/cppsummaryeditor/edit`,
    icon: <EditOutlined />
  }]
}, {
  title: `AlgorithmEditor`,
  key: `/admin/dashboard/algorithmeditor`,
  icon: <EditOutlined />,
  children: [{
    title: `List`,
    key: `/admin/dashboard/algorithmeditor/search`,
    icon: <UnorderedListOutlined />
  }, {
    title: `Add`,
    key: `/admin/dashboard/algorithmeditor/add`,
    icon: <FileAddOutlined />
  }, {
    title: `Edit`,
    key: `/admin/dashboard/algorithmeditor/edit`,
    icon: <EditOutlined />
  }]
}]

export default menuList
