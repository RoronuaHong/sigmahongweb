import {React, Component, useMemo} from 'react' 

import Icon from '../Icon/index'

import './index.scss'

class MusicContainer extends Component {
  state = {
    currentSong: {
      content: `touchme`,
      url: `https://p-def2.pcloud.com/cfZObmdvWZKWf46nZeq4R7ZZwPcuG7ZlXZZyPpZZc3CLZiFZYpZ7FZV7Z55ZW7ZBFZPFZu5ZBpZv0ZIVZTHZoHZRusEYJHwYTbQUkTupd5P4jlXHDM7/TouchMe.mp3`
    },
    playingState: 'pause'
  }

  handleClickPrev = () => {
    console.log(`上一首`)
  }

  handleClickNext = () => {
    console.log(`下一首`)
  }

  handlePlaySong = () => {
    console.log(`12345`)
  }

  playIcon = () => {
    const { playingState } = this.state
    
    this.setState({
      playingState: playingState ? 'pause' : 'play'
    })
  }

  render() {
    const { currentSong } = this.state

    return (
      <div className='mini-player-wrapper'>
        <div className='song'>
          {currentSong.content && (
            <>
              {/* <div className='img-wrap'>
                <img src={currentSong.img} alt='' className='blur' />
                <div className='player-control'>
                  <Icon size={24} type={isPlayerShow ? "shrink" : "open"} color='white' />
                </div>
              </div> */}
              <div className='content'>
                <div className='top'>
                  <p className='name'>{currentSong.content}</p>
                  <p className='split'>-</p>
                  <p className='artists'>{`None`}</p>
                </div>
                {/* <div className='time'>
                  <span className='played-time'>{formatTime(currentTime)}</span>
                  <span className='split'>/</span>
                  <span className='total-time'>{formatTime(currentSong.duration / 1000)}</span>
                </div> */}
              </div>
            </>
          )}
        </div>
        <div className='control'>
          <Icon size={24} className='icon' type='prev' click={this.handleClickPrev} />
          <div className='play-icon' onClick={this.handlePlaySong} >
            <Icon size={24} type={this.playIcon}/>
          </div>
          <Icon size={24} className='icon' type='next' click={this.handleClickNext} />
        </div>
      </div>
    )
  }
}

export default MusicContainer
