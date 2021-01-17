import {
  action,
  observable,
  makeObservable,
} from 'mobx'

import api from './../api/api'

class BCppSummaryStore {
  constructor() {
    makeObservable(this)
  } 

  @observable title = ``
  @observable value = ``

  @action
  setCppSummaryTitleInput(title) {
    this.title = title
  }

  @action
  setCppSummaryInput(value) {
    this.value = value
  }
  clearCppSummaryInput() {
    this.value = ``
  }

  @action
  setCppSummaryEditorContent(params) {
    api.cppsummary.setCppSummaryEditorContent(params).then(res => {
      
    })
  }
}

export default BCppSummaryStore
