import { React, Component } from 'react'
import { Modal } from 'antd'
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

import moment from 'moment'
import LinkButton from '../../../Widgets/LinkButton'
import menuList from '../../../config/BmenuConfig'
import storageUtils from '../../../utils/storageUtils'

import '../index.scss'

const { confirm } = Modal

@inject('loginStore')
@observer
class HeaderContainer extends Component {
  state = {
    currentTime: Date.now()
  }
  
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        currentTime: Date.now()
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  getTitle = () => {
    let title = ``
    const path = this.props.location.pathname

    menuList.forEach(item => {
      if(item.key === path) {
        title = item.title
      } else if(item.children) {
        const cItem = item.children.find(cItem => cItem.key === path)

        if(cItem) {
          title = cItem.title
        }
      }
    })

    return title
  }

  handleLogout = () => {
    const { history, loginStore } = this.props

    confirm({
      title: `确认退出吗?`,
      onOk() {
        storageUtils.removeUser()
        loginStore.clearLoginUser()

        history.replace(`/admin/login`)
      },
      onCancel() {}
    })
  }

  render() {
    const { currentTime } = this.state
    const user = storageUtils.getUser()
    const title = this.getTitle()
    const formattedTime = moment(currentTime).format(`YYYY-MM-DD HH:mm:ss`)

    return (
      <div className={`header-wrapper`}>
        <div className={`header-top`}>
          欢迎, {user.username} &nbsp;&nbsp;
          <LinkButton onClick={() => this.handleLogout()}>退出</LinkButton>
        </div>
        <div className={`header-bottom`}>
        <div className={`header-bottom-left`}>
          {title}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {`` || ``}
        </div>
          <div className={`header-bottom-right`}>
            <span className={`header-bottom-time`}>{formattedTime}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(HeaderContainer)
