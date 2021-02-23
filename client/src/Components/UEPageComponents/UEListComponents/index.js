import moment from 'moment'
import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

import './index.scss'

@inject('bUEBasisStore')
@observer
class UEListComponents extends Component {
  componentWillMount() {
    const { bUEBasisStore } = this.props

    bUEBasisStore.getUEBasisContent()
  }

  renderUEList = () => {
    const { bUEBasisStore } = this.props
    const { gettingValue } = bUEBasisStore

    const newList = [];

    gettingValue && gettingValue.map(item => item.top && newList.push(item))
    gettingValue && gettingValue.map(item => !item.top && newList.push(item))

    return newList && newList.map(item => {
      return (
        <div className={`ue-li`} key={item._id}>
          <a href={`/ue-basis/content/${item._id}`} target='_blank' rel='noreferrer'>
            <h2>
              {item.top && <font color={`#EE0000`}>{`[置顶]`}</font>}
              &nbsp; 
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
      )
    })
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
