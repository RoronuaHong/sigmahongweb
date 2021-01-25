import './index.scss'

import HeaderComponents from '../../Components/MusicComponents/HeaderComponents/index'
import MenuComponents from '../../Components/MusicComponents/MenuComponents/index'

import { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('loginStore')
@observer
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
      </div>
    )
  }
}

export default MusicContainer
