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
    index: 0,
    currentSong: {
      artist: ``,
      content: ``,
      img: '',
      url: ``
    },
    playingState: false,
    volume: 0.75,
    currentTime: `00:00`,
    duration: `00:00`,
  }

  async componentWillMount() {
    const { match, bMusicStore } = this.props
    const { gettingData } = bMusicStore
    const { params } = match

    await bMusicStore.getMusicContentById({ id: params.id })
  }

  changeSong = (artist, content, img, url) => {
    this.setState({ 
      currentSong: { artist, content, img, url }, 
      playingState: false
    }, () => this.handlePlaySong())
  }

  async componentDidMount() {
    const { index } = this.state
    const { bMusicStore } = this.props
    const { gettingData } = bMusicStore
    const audio = this.audio

    audio.addEventListener(`canplay`, () => {
      this.setState({
        duration: formatTime(parseInt(audio.duration)),
        durationUnFormat: parseInt(audio.duration)
      })
    })

    setTimeout(() => {
      const { bMusicStore } = this.props
      const { gettingData } = bMusicStore

      const artist = gettingData[index] && gettingData[index].artist
      const content = gettingData[index] && gettingData[index].content
      const img = gettingData[index] && gettingData[index].img
      const url = gettingData[index] && gettingData[index].url

      this.changeSong(artist, content, img, url)
    }, 500)
  }

  handleClickPrev = () => {
    const { index } = this.state
    const { bMusicStore } = this.props
    const { gettingData } = bMusicStore
    const length = gettingData.length
    let num = index

    num--

    if(num < 0) {
      num = length - 1
    }

    if(num > length - 1) {
      num = 0
    }

    this.setState({ 
      index: num
    }, () => {
      const artist = gettingData[num] && gettingData[num].artist
      const content = gettingData[num] && gettingData[num].content
      const img = gettingData[num] && gettingData[num].img
      const url = gettingData[num] && gettingData[num].url

      this.setState({ currentSong: { artist, content, img, url }})
    })
  }

  handleClickNext = () => {
    const { index } = this.state
    const { bMusicStore } = this.props
    const { gettingData } = bMusicStore
    const length = gettingData.length
    let num = index

    num++

    if(num < 0) {
      num = length - 1
    }

    if(num > length - 1) {
      num = 0
    }

    this.setState({ 
      index: num 
    }, () => {
      const artist = gettingData[num] && gettingData[num].artist
      const content = gettingData[num] && gettingData[num].content
      const img = gettingData[num] && gettingData[num].img
      const url = gettingData[num] && gettingData[num].url

      this.changeSong(artist, content, img, url)
    })
  }

  handlePlaySong = async() => {
    const { playingState } = this.state

    if(!playingState) {
      await this.audio.play()
    } else {
      await this.audio.pause()
    }

    this.setState({
      playingState: playingState ? false : true
    })
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

  render() {
    const { volume, currentSong, playingState, duration, currentTime } = this.state

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
          src={currentSong.url}
          onTimeUpdate={this.updateTime}
          ref={ref => this.audio = ref}
        ></audio>
      </div>
    )
  }
}

export default withRouter(MiniPlayerComponents)
