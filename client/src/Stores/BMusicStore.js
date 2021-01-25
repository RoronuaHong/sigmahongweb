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

  @observable content = ``
  @observable url = ``
  @observable gettingContent = ``
  @observable gettingUrl = ``

  @action
  getMusicContentById(params) {
    api.music.getMusicContentById(params).then(data => {
      if(data && data.status) {
        
      } else {
        
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
