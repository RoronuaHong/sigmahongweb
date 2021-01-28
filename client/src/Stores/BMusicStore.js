import { message } from 'antd'
import {
  toJS,
  action,
  observable,
  makeObservable,
} from 'mobx'
import { observer } from 'mobx-react'

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
  @observable currentAudio = {}
  @observable currentId = 0
  @observable currentIndex = 0
  @observable currentSong = {
    artist: ``,
    content: ``,
    img: ``,
    url: ``
  }
  @observable playingState = false

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

  @action
  setCurrentAudio = node => {
    node && (this.currentAudio = node)
  }

  @action
  setCurrentSong = data => {
    this.currentSong = data
  }

  @action
  setCurrentId = id => {
    this.currentId = id
  }

  @action
  setCurrentIndex = index => {
    this.currentIndex = index
  }

  @action
  setPlayingState = boolean => {
    this.playingState = boolean
  }
}

export default BMusicStore
