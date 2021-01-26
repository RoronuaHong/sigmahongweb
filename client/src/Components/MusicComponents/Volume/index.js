import React, { useMemo, useState } from 'react' 
import PropTypes from 'prop-types' 
import ProgressBar from '../ProgressBar'
import {
  AudioOutlined,
  AudioMutedOutlined
} from '@ant-design/icons'

import './index.scss'

function Volume(props) {
  const { volume, onVolumeChange, onVolumeInput } = props
  const [lastVolume, setLastVolume] = useState(volume)

  const onProgressChange = value => {
    onVolumeChange(value) 
  }

  const onProgressInput = value => {
    onVolumeInput(value) 
  }

  const volumeIconClick = () => {
    const target = volume ? 0 : lastVolume

    if(volume) {
      setLastVolume(volume * 100)
    }

    onVolumeChange(target)
  }

  return (
    <div className='volume-wrap'>
      {volume === 0 ? <AudioMutedOutlined 
        className={`volumn-sound`}
        style={{ fontSize: `18px`, color: `#d33a31` }}
        onClick={volumeIconClick}
      /> : 
      <AudioOutlined
        className={`volumn-sound`}
        style={{ fontSize: `18px`, color: `#d33a31` }}
        onClick={volumeIconClick}
      />}
      <div className='progress-wrap'>
        <ProgressBar
          progressChange={onProgressChange}
          progressInput={onProgressInput}
          percent={volume}
        />
      </div>
    </div>
  ) 
}

Volume.defaultProps = {
  volume: 0
}

Volume.propTypes = {
  volume: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onVolumeInput: PropTypes.func,
  onVolumeChange: PropTypes.func
} 

export default Volume 
