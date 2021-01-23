import { message } from 'antd'
import {
  action,
  observable,
  makeObservable,
} from 'mobx'

import api from './../api/api'

class BChromeStore {
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
  setChromeTitleInput(title) {
    this.title = title
  }

  @action
  setChromePreviewInput(preview) {
    this.preview = preview
  }

  @action
  setChromeInput(value) {
    this.value = value
  }

  @action
  clearChromeInput() {
    this.title = ``
    this.value = ``
    this.preview = ``
  }

  @action
  setChromeContent(params) {
    api.chrome.setChromeContent(params).then(data => {
      if(data && data.status) {
        message.success(data.msg)
      }
    })
  }

  @action
  updateChromeContent(params) {
    message.destroy()

    api.chrome.updateChromeContent(params).then(data => {
      if(data && data.status) {
        message.success(data.msg)
      }
    })
  }

  @action
  getChromeContent(params) {
    api.chrome.getChromeContent(params).then(value => {
      this.gettingValue = value.data
    })
  }

  @action
  getChromeContentById(params) {
    api.chrome.getChromeContentById(params).then(data => {
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
  delChromeContent(params) {
    message.destroy()

    api.chrome.delChromeContent(params).then(data => {
      if(data.status) {
        message.success(data.msg)

        this.gettingValue = this.gettingValue.filter(item => params.id !== item._id)
      }
    })
  }

  @action
  delManyChromeContent(params) {
    message.destroy()

    api.chrome.delManyChromeContent(params).then(data => {
      if(data.status) {
        message.success(data.msg)

        JSON.parse(params.ids) && JSON.parse(params.ids).map(id => this.gettingValue = this.gettingValue.filter(item => id !== item._id))
      }
    })
  }
}

export default BChromeStore
