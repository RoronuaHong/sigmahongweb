import { message } from 'antd'
import {
  action,
  observable,
  makeObservable,
} from 'mobx'

import api from './../api/api'

class BUEProdStore {
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
  setUEProdTitleInput(title) {
    this.title = title
  }

  @action
  setUEProdPreviewInput(preview) {
    this.preview = preview
  }

  @action
  setUEProdInput(value) {
    this.value = value
  }

  @action
  clearUEProdInput() {
    this.title = ``
    this.value = ``
    this.preview = ``
  }

  @action
  setUEProdContent(params) {
    api.ueprod.setUEProdContent(params).then(data => {
      if(data && data.status) {
        message.success(data.msg)
      }
    })
  }

  @action
  updateUEProdContent(params) {
    message.destroy()

    api.ueprod.updateUEProdContent(params).then(data => {
      if(data && data.status) {
        message.success(data.msg)
      }
    })
  }

  @action
  getUEProdContent(params) {
    api.ueprod.getUEProdContent(params).then(value => {
      this.gettingValue = value.data
    })
  }

  @action
  getUEProdContentById(params) {
    api.ueprod.getUEProdContentById(params).then(data => {
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
  delUEProdContent(params) {
    message.destroy()

    api.ueprod.delUEProdContent(params).then(data => {
      if(data.status) {
        message.success(data.msg)

        this.gettingValue = this.gettingValue.filter(item => params.id !== item._id)
      }
    })
  }

  @action
  delManyUEProdContent(params) {
    message.destroy()

    api.ueprod.delManyUEProdContent(params).then(data => {
      if(data.status) {
        message.success(data.msg)

        JSON.parse(params.ids) && JSON.parse(params.ids).map(id => this.gettingValue = this.gettingValue.filter(item => id !== item._id))
      }
    })
  }
}

export default BUEProdStore
