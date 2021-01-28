import { React, Component } from 'react' 
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'

import Volume from '../Volume/index'

import {
  PauseOutlined,
  StepForwardFilled,
  StepBackwardFilled,
  CaretRightOutlined,
} from '@ant-design/icons'
import { formatTime } from '../../../utils/tools' 
import NewProgressBar from '../NewProgressBar'

import './index.scss'

@inject('bMusicStore')
@observer
class MiniPlayerComponents extends Component {
  state = {
    volume: 0.75,
    currentTime: `00:00`,
    duration: `00:00`,
  }

  async componentWillMount() {
    const { match, bMusicStore } = this.props
    const { params } = match

    await bMusicStore.getMusicContentById({ id: params.id })
  }

  handleChangeSong = async(artist, content, img, url, id) => {
    const { onRef, bMusicStore } = this.props
    const { setCurrentSong, setPlayingState } = bMusicStore
    const data = { artist, content, img, url, id }

    onRef(this)

    await setCurrentSong(data)
    await setPlayingState(false)

    this.handlePlaySong()
  }

  handleEndEvnet = () => {
		this.handleClickNext()
	}

  async componentDidMount() {
    const { bMusicStore } = this.props
    const { currentIndex } = bMusicStore

    const audio = this.audio

    audio.addEventListener(`canplay`, () => {
      this.setState({
        duration: formatTime(parseInt(audio.duration)),
        durationUnFormat: parseInt(audio.duration)
      })
    })

    setTimeout(() => {
      const { bMusicStore } = this.props
      const { gettingData, setCurrentId } = bMusicStore

      const id = gettingData[currentIndex] && gettingData[currentIndex].id
      const artist = gettingData[currentIndex] && gettingData[currentIndex].artist
      const content = gettingData[currentIndex] && gettingData[currentIndex].content
      const img = gettingData[currentIndex] && gettingData[currentIndex].img
      const url = gettingData[currentIndex] && gettingData[currentIndex].url

      setCurrentId(id)

      this.handleChangeSong(artist, content, img, url, id)
    }, 500)
  }

  handleClickPrev = async() => {
    const { bMusicStore } = this.props
    const { gettingData, currentIndex, setCurrentId, setCurrentIndex, setCurrentSong, setPlayingState } = bMusicStore
    const length = gettingData.length
    let num = currentIndex

    num--

    if(num < 0) {
      num = length - 1
    }

    if(num > length - 1) {
      num = 0
    }

    const id = gettingData[num] && gettingData[num].id
    const artist = gettingData[num] && gettingData[num].artist
    const content = gettingData[num] && gettingData[num].content
    const img = gettingData[num] && gettingData[num].img
    const url = gettingData[num] && gettingData[num].url

    const data = { artist, content, img, url, id }

    await setCurrentSong(data)
    await setPlayingState(false)
    await setCurrentIndex(num)
    await setCurrentId(id)

    this.handlePlaySong()
  }

  handleClickNext = async() => {
    const { bMusicStore } = this.props
    const { gettingData, currentIndex, setCurrentId, setCurrentIndex, setCurrentSong, setPlayingState } = bMusicStore
    const length = gettingData.length
    let num = currentIndex

    num++

    if(num < 0) {
      num = length - 1
    }

    if(num > length - 1) {
      num = 0
    }

    const id = gettingData[num] && gettingData[num].id
    const artist = gettingData[num] && gettingData[num].artist
    const content = gettingData[num] && gettingData[num].content
    const img = gettingData[num] && gettingData[num].img
    const url = gettingData[num] && gettingData[num].url

    const data = { artist, content, img, url, id }

    await setCurrentSong(data)
    await setPlayingState(false)
    await setCurrentIndex(num)
    await setCurrentId(id)

    this.handlePlaySong()
  }

  handlePlaySong = async() => {
    const { bMusicStore } = this.props
    const { playingState, setPlayingState } = bMusicStore

    if(!playingState) {
      await this.audio.play()
    } else {
      await this.audio.pause()
    }

    await setPlayingState(playingState ? false : true)
  }

  handleVolumeInput = value => {
    this.audio.volume = value / 100

    this.setState({
      volume: value / 100
    })
  }

  handleVolumeChange = value => {
    this.audio.volume = value / 100

    this.setState({
      volume: value / 100
    })
  }

  // 歌曲进度的数值
	playedPercent = () => {
    const { durationUnFormat, currentUnFormatTime } = this.state

		return Math.min(parseInt(currentUnFormatTime) / parseInt(durationUnFormat), 1) * 100 || 0
	}

  setTime = playedPercent => {
    const duration = parseInt(this.audio.duration)
		const time = duration * (playedPercent / 100)

    this.audio && (this.audio.currentTime = time)

    this.setState({
      currentTime: formatTime(time)
    })
	}

  handleProgressChange = value => {
		this.setTime(value)
	}

  updateTime = e => {
    this.setState({
      currentTime: formatTime(e.target.currentTime),
      currentUnFormatTime: e.target.currentTime
    })
  }

  setCurrentAudio = node => {
    const { bMusicStore } = this.props
    const { setCurrentAudio } = bMusicStore

    setCurrentAudio(node)
  }

  render() {
    const { volume, duration, currentTime } = this.state
    const { bMusicStore } = this.props
    const { currentSong, playingState } = bMusicStore

    return (
      <div className='mini-player-wrapper'>
        <div className='song'>
          {currentSong.content && (
            <div className='content'>
              <div className='top'>
                <p className='name'>{currentSong.content}</p>
                <p className='split'>-</p>
                <p className='artists'>{currentSong.artist}</p>
              </div>
              <div className='time'>
								<span className='played-time'>{currentTime}</span>
								<span className='split'>/</span>
								<span className='total-time'>{duration}</span>
							</div>
            </div>
          )}
        </div>
        <div className='control'>
          <StepBackwardFilled
            style={{ fontSize: `30px`, color: `#d33a31` }}
            onClick={this.handleClickPrev}
          />
          <div className='play-icon' onClick={this.handlePlaySong} >
            {!playingState ? <CaretRightOutlined
              className={`play-button`}
              style={{ fontSize: `25px`, color: `#fff` }}
            /> :
            <PauseOutlined
              className={`play-button`}
              style={{ fontSize: `25px`, color: `#fff` }}
            />}
          </div>
          <StepForwardFilled
            style={{ fontSize: `30px`, color: `#d33a31` }}
            onClick={this.handleClickNext}
          />
        </div>
				<div className='volume-item'>
					<Volume
						volume={volume}
						onVolumeInput={this.handleVolumeInput}
						onVolumeChange={this.handleVolumeChange}
					/>
				</div>
        <div className='progress-bar-wrap'>
					<NewProgressBar
						progressChange={this.handleProgressChange}
						progressInput={this.handleProgressChange}
						percent={this.playedPercent()}
						step='0.1'
					/>
				</div>
        <audio
          onEnded={this.handleEndEvnet}
          src={currentSong.url}
          onTimeUpdate={this.updateTime}
          ref={ref => {
            this.setCurrentAudio(ref)
            this.audio = ref
          }}
        ></audio>
      </div>
    )
  }
}

export default withRouter(MiniPlayerComponents)
