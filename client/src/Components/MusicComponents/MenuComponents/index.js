import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import './index.scss'

function MenuComponents() {
    return (
        <div className='menu-wrapper'>
          <ul className={`menu-list`}>
            <li key={`1`} className='menu-item'>
                <span className='menu-title'>音乐1</span>
            </li>
            <li key={`2`} className='menu-item'>
                <span className='menu-title'>音乐2</span>
            </li>
            <li key={`3`} className='menu-item'>
                <span className='menu-title'>音乐3</span>
            </li>
          </ul>
        </div>
    )
}

export default memo(MenuComponents)
