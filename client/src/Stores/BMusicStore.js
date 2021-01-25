import { message } from 'antd'
import {
  action,
  observable,
  makeObservable,
} from 'mobx'

import api from './../api/api'

class BMusicStore {
  constructor() {
    makeObservable(this)
  }

  @action
  setMusicContent(params) {
    api.music.setMusicContent(params).then(data => {
      if(data && data.status) {
        message.success(data.msg)
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
