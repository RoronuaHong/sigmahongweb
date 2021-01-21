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
  setAlgorithmContent(params) {
    api.cppsummary.setAlgorithmContent(params).then(data => {
      if(data && data.status) {
        message.success(data.msg)
      }
    })
  }

  @action
  getAlgorithmContent(params) {
    api.cppsummary.getAlgorithmContent(params).then(value => {
      this.gettingValue = value.data
    })
  }

  @action
  updateAlgorithmContent(params) {
    message.destroy()

    api.cppsummary.updateAlgorithmContent(params).then(data => {
      if(data && data.status) {
        message.success(data.msg)
      }
    })
  }

  @action
  getAlgorithmById(params) {
    api.cppsummary.getAlgorithmById(params).then(data => {
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
}

export default BAlgorithmStore
