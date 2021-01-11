import { 
  action,
  computed,
  observable,
  makeObservable,
} from 'mobx'

class CppSummaryStore {
  constructor() {
    makeObservable(this)
  } 

  @observable time = ''
  @observable todoList = []

  @computed get desc() {
    return `${this.time} 还有 ${this.todoList.length} 条任务待完成`
  }
  
  @action addTodo(todo) {
    this.todoList.push(todo)
  }
  @action delTodo(todo) {
    this.todoList.pop()
  }
  @action resetTodo() {
    this.todoList = []
  }
}


export default CppSummaryStore
