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
  @observable preview = ``
  @observable gettingValue = ``
  @observable gettingTitle = ``
  @observable gettingContent = ``

  @action
  setCppSummaryTitleInput(title) {
    this.title = title
  }

  @action
  setCppSummaryPreviewInput(preview) {
    this.preview = preview
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
    api.cppsummary.setCppSummaryEditorContent(params)
  }

  @action
  getCppSummaryEditorContent(params) {
    api.cppsummary.getCppSummaryEditorContent(params).then(value => {
      this.gettingValue = value.data
    })
  }

  @action
  getCppSummaryContentById(params) {
    api.cppsummary.getCppSummaryContentById(params).then(data => {
      if(data && data.status) {
        this.gettingTitle = data ? data.data.title : ``
        this.gettingContent = data ? data.data.value : ``
      }
    })
  }
}

export default BCppSummaryStore
