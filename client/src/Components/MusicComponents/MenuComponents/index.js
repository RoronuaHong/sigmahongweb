import React, { memo } from 'react'

import './index.scss'

const MenuComponents = props => {
  const { MenuList } = props

  return (
    <div className='menu-wrapper'>
      <ul className={`menu-list`}>
        {MenuList && MenuList.map(item => (
          <li key={item.content} className='menu-item'>
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

export default memo(MenuComponents)
