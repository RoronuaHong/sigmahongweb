import {
  HomeOutlined,
  EditOutlined,
  FormOutlined,
} from '@ant-design/icons'

const menuList = [{
  title: `Home`,
  key: `/admin/dashboard/home`,
  icon: <HomeOutlined />
}, {
  title: `CppSummaryEditor`,
  key: `/admin/dashboard/cppsummaryeditor`,
  icon: <EditOutlined />
}, {
  title: `Others`,
  key: `/admin/dashboard/others`,
  icon: <FormOutlined />,
  children: [{
    title: `1`,
    key: `/admin/dashboard/others-1`,
    icon: <EditOutlined />
  }, {
    title: `2`,
    key: `/admin/dashboard/others-2`,
    icon: <EditOutlined />
  }]
}]

export default menuList