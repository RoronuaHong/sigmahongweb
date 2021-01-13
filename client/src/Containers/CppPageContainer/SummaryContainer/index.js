import { Component } from 'react'
import JSONPretty from 'react-json-pretty'
import { inject, observer } from 'mobx-react'

@inject('cppSummaryStore')
@observer
class SummaryContainer extends Component {
  handleTodos(type) {
    let { cppSummaryStore } = this.props
  
    switch(type) {
      case 'add':
        cppSummaryStore.addTodo(`一条新任务`)

        break
      case 'del':
        cppSummaryStore.delTodo()

        break
      case 'reset':
        cppSummaryStore.resetTodo()

        break
      default:
        cppSummaryStore.addTodo(`一条新任务`)

        break
    }
  }

  render() {
    let { cppSummaryStore } = this.props

    cppSummaryStore.getMyName()

    return (
      <div className={`summary-content`}>
        <h1>在React中使用mobx</h1>
        <button onClick={() => this.handleTodos('add')}>添加</button>
        <button onClick={() => this.handleTodos('del')}>删除</button>
        <button onClick={() => this.handleTodos('reset')}>重置</button>
        {
          cppSummaryStore.todoList.map((ele, index, arr) => {
            return (
              <div key={index}>{ele}</div>
            )
          })
        }
        <div className={`content`}>
          <JSONPretty json={cppSummaryStore.todoList}></JSONPretty>
        </div>
      </div>
    )
  }
}

export default SummaryContainer
