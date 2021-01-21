import { message } from 'antd'
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
  @observable gettingTitle = `Loading...`
  @observable gettingPreview = `Loading...`
  @observable gettingContent = `Loading...`

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

  @action
  clearCppSummaryInput() {
    this.title = ``
    this.value = ``
    this.preview = ``
  }

  @action
  setCppSummaryEditorContent(params) {
    api.cppsummary.setCppSummaryEditorContent(params).then(data => {
      if(data && data.status) {
        message.success(data.msg)
      }
    })
  }

  @action
  updateCppSummaryEditorContent(params) {
    message.destroy()

    api.cppsummary.updateCppSummaryEditorContent(params).then(data => {
      if(data && data.status) {
        message.success(data.msg)
      }
    })
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
        this.gettingPreview = data ? data.data.preview : ``
      } else {
        this.gettingTitle = ``
        this.gettingContent = ``
        this.gettingPreview = ``
      }
    })
  }

  @action
  delCppSummaryEditorContent(params) {
    message.destroy()

    api.cppsummary.delCppSummaryEditorContent(params).then(data => {
      if(data.status) {
        message.success(data.msg)

        this.gettingValue = this.gettingValue.filter(item => params.id !== item._id)
      }
    })
  }

  @action
  delManyCppSummaryEditorContent(params) {
    message.destroy()

    api.cppsummary.delManyCppSummaryEditorContent(params).then(data => {
      if(data.status) {
        message.success(data.msg)

        this.gettingValue = ``
      }
    })
  }
}

export default BCppSummaryStore
