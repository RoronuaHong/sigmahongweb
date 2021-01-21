import { message } from 'antd'
import { 
  action,
  observable,
  makeObservable,
} from 'mobx'

import api from '../api/api'

class BAlgorithmStore {
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
  setAlgorithmTitleInput(title) {
    this.title = title
  }

  @action
  setAlgorithmPreviewInput(preview) {
    this.preview = preview
  }

  @action
  setAlgorithmInput(value) {
    this.value = value
  }

  @action
  clearAlgorithmInput() {
    this.title = ``
    this.value = ``
    this.preview = ``
  }

  @action
  setAlgorithmContent(params) {
    api.algorithm.setAlgorithmContent(params).then(data => {
      if(data && data.status) {
        message.success(data.msg)
      }
    })
  }

  @action
  getAlgorithmContent(params) {
    api.algorithm.getAlgorithmContent(params).then(value => {
      this.gettingValue = value.data
    })
  }

  @action
  updateAlgorithmContent(params) {
    message.destroy()

    api.algorithm.updateAlgorithmContent(params).then(data => {
      if(data && data.status) {
        message.success(data.msg)
      }
    })
  }

  @action
  getAlgorithmById(params) {
    api.algorithm.getAlgorithmById(params).then(data => {
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
  delAlgorithmContent(params) {
    message.destroy()

    api.algorithm.delAlgorithmContent(params).then(data => {
      if(data.status) {
        message.success(data.msg)

        this.gettingValue = this.gettingValue.filter(item => params.id !== item._id)

        console.log(this.gettingValue)
      }
    })
  }
}

export default BAlgorithmStore
