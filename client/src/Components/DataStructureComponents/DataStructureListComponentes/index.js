import moment from 'moment'
import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

import './index.scss'

@inject('bdatastructureStore')
@observer
class DataStructureListComponentes extends Component {
  componentWillMount() {
    const { bdatastructureStore } = this.props

    bdatastructureStore.getDatastructureContent()
  }

  renderDataStructureList = () => {
    const { bdatastructureStore } = this.props
    const { gettingValue } = bdatastructureStore

    return gettingValue && gettingValue.map(item => (
      <div className={`datastructure-li`} key={item._id}>
        <a href={`/cpp-datastructure/content/${item._id}`} target='_blank' rel='noreferrer'>
          <h2>
            {item.title}
          </h2>
          <div className={`post-content-preview`}>
            {item.preview}
          </div>
        </a>
        <p className={`post-meta`}>
          {moment(item.createdAt).format(`YYYY-MM-DD HH:mm:ss`)}
        </p>
        <hr/>
      </div>
    ))
  }

  render() {
    return (
      <div className={`datastructure-list`}>
        {this.renderDataStructureList()}
      </div>
    )
  }
}

export default withRouter(DataStructureListComponentes)
