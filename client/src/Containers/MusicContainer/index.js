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

  // FIXME: 获取前台图片。
  render() {
    const { bMusicStore } = this.props
    const { gettingData } = bMusicStore

    const image = gettingData[0] && gettingData[0].image

    return (
      <div className='music-wrapper'>
        <HeaderComponents />
        <div className={`music-content`}>
          <div className='music-menu'>
            <MenuComponents
              MenuList={gettingData}
            />
          </div>
          <div className={`music-right-content`}>
            <img className={`music-right-img`} src={image} alt={`image`} />
          </div>
        </div>
        <MiniPlayerComponents />
      </div>
    )
  }
}

export default MusicContainer
