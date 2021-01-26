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
    currentSong: {
      artist: `kurakimai`,
      content: `touchme`,
      img: 'https://i.imgur.com/ixtwFY6.jpg',
      url: `https://p-def2.pcloud.com/cfZObmdvWZKWf46nZeq4R7ZZ0zDfG7ZlXZZyPpZZc3CLZiFZYpZ7FZV7Z55ZW7ZBFZPFZu5ZBpZv0ZIVZTHZoHZaxEytI2VrhpmGS7ifKVERpF2VvEX/TouchMe.mp3`
    },
    playingState: false,
    volume: 0.75,
    currentTime: `00:00`,
    duration: `00:00`,
  }

  async componentWillMount() {
    const { match, bMusicStore } = this.props
    const { params } = match

    await bMusicStore.getMusicContentById({ id: params.id })
  }

  componentDidMount() {
    const audio = this.audio

    audio.addEventListener(`canplay`, () => {
      this.setState({
        duration: formatTime(parseInt(audio.duration)),
        durationUnFormat: parseInt(audio.duration)
      })
    })
  }

  handleClickPrev = () => {
    console.log(`上一首`)
  }

  handleClickNext = () => {
    console.log(`下一首`)
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
