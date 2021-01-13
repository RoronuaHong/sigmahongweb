import {
  toJS,
  action,
  computed,
  observable,
  makeObservable,
} from 'mobx'

import api from './../api/api'

class CppSummaryStore {
  constructor() {
    makeObservable(this)
  } 

  @observable time = ''
  @observable name = 'None'
  @observable todoList = []

  @computed
  get desc() {
    return `${this.time} 还有 ${this.todoList.length} 条任务待完成`
  }
  
  @action
  getMyName() {
    api.cppsummary.getName().then(res => {
      this.name = res
      
      console.log(toJS(this.name))
    })
  }

  @action
  addTodo(todo) {
    this.todoList.push(todo)
  }
  @action 
  delTodo(todo) {
    this.todoList.pop()
  }
  @action 
  resetTodo() {
    this.todoList = []
  }
}


export default CppSummaryStore
