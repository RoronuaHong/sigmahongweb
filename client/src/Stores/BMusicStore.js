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
  @observable addingContent = ``
  @observable addingArtist = ``
  @observable addingUrl = ``
  @observable addingImage = ``

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

        this.gettingData = data.data
      }
    })
  }

  @action
  setAddContentInput(value) {
    this.addingContent = value
  }

  @action
  setAddArtistInput(value) {
    this.addingArtist = value
  }

  @action
  setAddUrlInput(value) {
    this.addingUrl = value
  }

  @action
  setAddImageInput(value) {
    this.addingImage = value
  }
}

export default BMusicStore
