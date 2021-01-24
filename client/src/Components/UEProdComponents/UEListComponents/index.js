import moment from 'moment'
import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

import './index.scss'

@inject('bUEProdStore')
@observer
class UEListComponents extends Component {
  componentWillMount() {
    const { bUEProdStore } = this.props

    bUEProdStore.getUEProdContent()
  }

  renderUEList = () => {
    const { bUEProdStore } = this.props
    const { gettingValue } = bUEProdStore

    return gettingValue && gettingValue.map(item => (
      <div className={`ue-li`} key={item._id}>
        <a href={`/ue-basis/content/${item._id}`} target='_blank' rel='noreferrer'>
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
      <div className={`ue-list`}>
        {this.renderUEList()}
      </div>
    )
  }
}

export default withRouter(UEListComponents)
