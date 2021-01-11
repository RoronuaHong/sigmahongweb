import { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('algorithmStore') 
@observer
class AlgorithmContainer extends Component {
  render() {
    let { algorithmStore } = this.props

    return (
      <div className={`summary-content`}>
        <h1>在React中使用mobx</h1>
        <div>{algorithmStore.others}</div>
      </div>
    )
  }
}

export default AlgorithmContainer
