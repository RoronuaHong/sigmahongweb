import React, { useMemo, useState } from 'react' 
import PropTypes from 'prop-types' 
import ProgressBar from '../ProgressBar'
import {
  SoundOutlined
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
      setLastVolume(volume)
    }

    onVolumeChange(target)
  }

  return (
    <div className='volume-wrap'>
      <SoundOutlined
        className={`volumn-sound`}
        style={{ fontSize: `20px`, color: `#d33a31` }}
        onClick={volumeIconClick}
      />
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
