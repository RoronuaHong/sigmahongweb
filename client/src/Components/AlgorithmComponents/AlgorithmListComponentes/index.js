import moment from 'moment'
import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

import './index.scss'

@inject('balgorithmStore')
@observer
class CppSummaryListComponents extends Component {
  componentWillMount() {
    const { balgorithmStore } = this.props

    // balgorithmStore.getAlgorithmContent()
  }

  renderSummaryList = () => {
    const { balgorithmStore } = this.props
    const { gettingValue } = balgorithmStore

    return gettingValue && gettingValue.map(item => (
      <div className={`summary-li`} key={item._id}>
        <a href={`/cpp-summary/content/${item._id}`} target='_blank' rel='noreferrer'>
          <h2>
            {item.title}
          </h2>
          <div className={`post-content-preview`}>
            {item.preview}
          </div>
        </a>
        <p className={`post-meta`}>
          {moment(item.createdAt).format(`YYYY-MM-DD hh:mm:ss`)}
        </p>
        <hr/>
      </div>
    ))
  }

  render() {
    return (
      <div className={`summary-list`}>
        {this.renderSummaryList()}
      </div>
    )
  }
}

export default withRouter(CppSummaryListComponents)
