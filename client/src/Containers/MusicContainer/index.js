import './index.scss'

import HeaderComponents from '../../Components/MusicComponents/HeaderComponents/index'
import MenuComponents from '../../Components/MusicComponents/MenuComponents/index'
import MiniPlayerComponents from '../../Components/MusicComponents/MiniPlayerComponents/index'

import { Component } from 'react'

class MusicContainer extends Component {
  render() {
    return (
      <div className='music-wrapper'>
        <HeaderComponents />
        <div className='music-content'>
          <div className='music-menu'>
            <MenuComponents />
          </div>
        </div>
        <MiniPlayerComponents />
      </div>
    )
  }
}

export default MusicContainer
