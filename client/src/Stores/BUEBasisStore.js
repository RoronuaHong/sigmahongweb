import { message } from 'antd'
import {
  action,
  observable,
  makeObservable,
} from 'mobx'

import api from './../api/api'

class BUEBasisStore {
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
  setUEBasisTitleInput(title) {
    this.title = title
  }

  @action
  setUEBasisPreviewInput(preview) {
    this.preview = preview
  }

  @action
  setUEBasisInput(value) {
    this.value = value
  }

  @action
  clearUEBasisInput() {
    this.title = ``
    this.value = ``
    this.preview = ``
  }

  @action
  setUEBasisContent(params) {
    api.uebasis.setUEBasisContent(params).then(data => {
      if(data && data.status) {
        message.success(data.msg)
      }
    })
  }

  @action
  updateUEBasisContent(params) {
    message.destroy()

    api.uebasis.updateUEBasisContent(params).then(data => {
      if(data && data.status) {
        message.success(data.msg)
      }
    })
  }

  @action
  getUEBasisContent(params) {
    api.uebasis.getUEBasisContent(params).then(value => {
      this.gettingValue = value.data
    })
  }

  @action
  getUEBasisContentById(params) {
    api.uebasis.getUEBasisContentById(params).then(data => {
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
  delUEBasisContent(params) {
    message.destroy()

    api.uebasis.delUEBasisContent(params).then(data => {
      if(data.status) {
        message.success(data.msg)

        this.gettingValue = this.gettingValue.filter(item => params.id !== item._id)
      }
    })
  }

  @action
  delManyUEBasisContent(params) {
    message.destroy()

    api.uebasis.delManyUEBasisContent(params).then(data => {
      if(data.status) {
        message.success(data.msg)

        JSON.parse(params.ids) && JSON.parse(params.ids).map(id => this.gettingValue = this.gettingValue.filter(item => id !== item._id))
      }
    })
  }
}

export default BUEBasisStore
