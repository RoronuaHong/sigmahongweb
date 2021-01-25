import { message } from 'antd'
import {
  toJS,
  action,
  observable,
  makeObservable,
} from 'mobx'

import api from './../api/api'

class BMusicStore {
  constructor() {
    makeObservable(this)
  }

  @observable data = []
  @observable gettingData = ``

  @action
  getMusicContentById(params) {
    message.destroy()

    api.music.getMusicContentById(params).then(data => {
      if(data && data.status) {
        this.gettingData = data.data.data
      } else {
        message.error('error')
      }
    })
  }

  @action
  updateMusicContent(params) {
    message.destroy()

    api.music.updateMusicContent(params).then(data => {
      if(data && data.status) {
        message.success(data.msg)
      }
    })
  }
}

export default BMusicStore
