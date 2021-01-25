import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import './index.scss'

function MenuComponents() {
    return (
        <div className='menu-wrapper'>
          <ul className={`menu-list`}>
            <li key={`1`} className='menu-item'>
                <NavLink exact to={`/`}>
                    <span className='menu-title'>音乐1</span>
                </NavLink>
            </li>
            <li key={`2`} className='menu-item'>
                <NavLink exact to={`/`}>
                    <span className='menu-title'>音乐2</span>
                </NavLink>
            </li>
            <li key={`3`} className='menu-item'>
                <NavLink exact to={`/`}>
                    <span className='menu-title'>音乐3</span>
                </NavLink>
            </li>
          </ul>
        </div>
    )
}

export default memo(MenuComponents)
