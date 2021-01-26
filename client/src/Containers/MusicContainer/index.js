import { Component } from 'react'
import { inject, observer } from 'mobx-react'

import HeaderComponents from '../../Components/MusicComponents/HeaderComponents/index'
import MenuComponents from '../../Components/MusicComponents/MenuComponents/index'
import MiniPlayerComponents from '../../Components/MusicComponents/MiniPlayerComponents/index'

import './index.scss'

@inject('bMusicStore')
@observer
class MusicContainer extends Component {
  async componentWillMount() {
    const { match, bMusicStore } = this.props
    const { params } = match

    await bMusicStore.getMusicContentById({ id: params.id })
  }

  render() {
    const { bMusicStore } = this.props
    const { gettingData } = bMusicStore

    return (
      <div className='music-wrapper'>
        <HeaderComponents />
        <div className='music-content'>
          <div className='music-menu'>
            <MenuComponents
              MenuList={gettingData}
            />
          </div>
        </div>
        <MiniPlayerComponents />
      </div>
    )
  }
}

export default MusicContainer
