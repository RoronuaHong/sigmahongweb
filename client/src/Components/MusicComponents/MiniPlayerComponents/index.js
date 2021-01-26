import { React, Component, useRef } from 'react' 

import Volume from '../Volume/index'
import {
  PauseOutlined,
  StepForwardFilled,
  StepBackwardFilled,
  CaretRightOutlined,
} from '@ant-design/icons'

import './index.scss'

class MusicContainer extends Component {
  state = {
    currentSong: {
      content: `touchme`,
      url: `https://p-def6.pcloud.com/cfZWruxiWZiOnEEnZeq4R7ZZe6ufG7ZlXZZyPpZZJ3yYZOHZ55Z7JZlJZYpZTpZBFZj5ZipZf7Z4HZppZVHZcHZ5CDj02K6InyUUCvaojzim4W9WCSX/Puzzle.mp3`
    },
    playingState: false,
    volume: 0.75
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

  render() {
    const { volume, currentSong, playingState } = this.state

    return (
      <div className='mini-player-wrapper'>
        <div className='song'>
          {currentSong.content && (
            <div className='content'>
              <div className='top'>
                <p className='name'>{currentSong.content}</p>
                <p className='split'>-</p>
                <p className='artists'>{`None`}</p>
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
        <audio
          src={currentSong.url}
          ref={ref => this.audio = ref}
        ></audio>
      </div>
    )
  }
}

export default MusicContainer
