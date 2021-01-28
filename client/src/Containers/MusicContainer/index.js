import { Component } from 'react'
import { inject, observer } from 'mobx-react'

import HeaderComponents from '../../Components/MusicComponents/HeaderComponents/index'
import MenuComponents from '../../Components/MusicComponents/MenuComponents/index'
import MiniPlayerComponents from '../../Components/MusicComponents/MiniPlayerComponents/index'

import './index.scss'

let image = ``

@inject('bMusicStore')
@observer
class MusicContainer extends Component {
  async componentWillMount() {
    const { match, bMusicStore } = this.props
    const { params } = match

    await bMusicStore.getMusicContentById({ id: params.id })
  }

  onRef = ref => this.child = ref

  render() {
    const { bMusicStore } = this.props
    const { gettingData, currentId, setCurrentId } = bMusicStore

    image = gettingData[0] && gettingData[0].image

    return (
      <div className='music-wrapper'>
        <HeaderComponents />
        <div className={`music-content`}>
          <div className='music-menu'>
            <MenuComponents 
              id={currentId}
              MenuList={gettingData}
              bMusicStore={bMusicStore}
              setCurrentId={setCurrentId} 
              child={this.child}
            />
          </div>
          <div className={`music-right-content`}>
            {image && <img className={`music-right-img`} src={image} alt={`image`} />}
          </div>
        </div>
        <MiniPlayerComponents onRef={this.onRef} />
      </div>
    )
  }
}

export default MusicContainer
