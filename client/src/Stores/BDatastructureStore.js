import { message } from 'antd'
import { 
  action,
  observable,
  makeObservable,
} from 'mobx'

import api from '../api/api'

class BDatastructureStore {
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
  setDatastructureTitleInput(title) {
    this.title = title
  }

  @action
  setDatastructurePreviewInput(preview) {
    this.preview = preview
  }

  @action
  setDatastructureInput(value) {
    this.value = value
  }

  @action
  clearDatastructureInput() {
    this.title = ``
    this.value = ``
    this.preview = ``
  }

  @action
  setDatastructureContent(params) {
    api.datastructure.setDatastructureContent(params).then(data => {
      if(data && data.status) {
        message.success(data.msg)
      }
    })
  }

  @action
  getDatastructureContent(params) {
    api.datastructure.getDatastructureContent(params).then(value => {
      this.gettingValue = value.data
    })
  }

  @action
  updateDatastructureContent(params) {
    message.destroy()

    api.datastructure.updateDatastructureContent(params).then(data => {
      if(data && data.status) {
        message.success(data.msg)
      }
    })
  }

  @action
  getDatastructureContentById(params) {
    api.datastructure.getDatastructureContentById(params).then(data => {
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
  delDatastructureContent(params) {
    message.destroy()

    api.datastructure.delDatastructureContent(params).then(data => {
      if(data.status) {
        message.success(data.msg)

        this.gettingValue = this.gettingValue.filter(item => params.id !== item._id)
      }
    })
  }

  @action
  delManyDatastructureContent(params) {
    message.destroy()

    api.datastructure.delManyDatastructureContent(params).then(data => {
      if(data.status) {
        message.success(data.msg)

        JSON.parse(params.ids) && JSON.parse(params.ids).map(id => this.gettingValue = this.gettingValue.filter(item => id !== item._id))
      }
    })
  }
}

export default BDatastructureStore
