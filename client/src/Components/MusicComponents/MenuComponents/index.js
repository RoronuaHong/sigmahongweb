import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import classNames from 'classnames'

class MenuComponents extends Component {
  handleMenuClick = async(ids, index) => {
    const { setCurrentId, bMusicStore, child } = this.props
    const { gettingData, setCurrentSong, setCurrentIndex, setPlayingState } = bMusicStore

    const id = gettingData[index] && gettingData[index].id
    const artist = gettingData[index] && gettingData[index].artist
    const content = gettingData[index] && gettingData[index].content
    const img = gettingData[index] && gettingData[index].img
    const url = gettingData[index] && gettingData[index].url

    if(child) {
      const data = { artist, content, img, url, id }
  
      await setCurrentId(ids)
      await setCurrentIndex(index)
      await setCurrentSong(data)
      await setPlayingState(false)
  
      child.handlePlaySong()
    }
  }

  render() {
    const { MenuList, id } = this.props

    return (
      <div className='menu-wrapper'>
        <ul className={`menu-list`}>
          {MenuList && MenuList.map((item, index) => (
            <li
              key={item.content} 
              className={classNames(
                `menu-item`,
                { 'menu-selected': (item.id === id) }
              )}
              onClick={() => this.handleMenuClick(item.id, index)}
            >
              <span className='menu-title'>{item.content}
                &nbsp;&nbsp;-&nbsp;&nbsp;
                <span className='menu-artist'>{item.artist}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default withRouter(MenuComponents)
