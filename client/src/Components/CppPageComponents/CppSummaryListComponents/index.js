import moment from 'moment'
import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

import './index.scss'

@inject('bcppSummaryStore')
@observer
class CppSummaryListComponents extends Component {
  componentWillMount() {
    const { bcppSummaryStore } = this.props

    bcppSummaryStore.getCppSummaryEditorContent()
  }

  renderSummaryList = () => {
    const { bcppSummaryStore } = this.props
    const { gettingValue } = bcppSummaryStore

    return gettingValue && gettingValue.map(item => (
      <div className={`summary-li`} key={item._id}>
        <a href={`/cpp-summary/content/${item._id}`} target='_blank'>
          <h2>
            {/* <font color={`#EE0000`}>{`[置顶]`}</font> */}
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
