import { Link } from 'react-router-dom'

import musicList from '../../../../config/MusicConfig'

import './index.scss'

const MainList = () => {
  return (
    <ul className={`music-main-list`}>
      {musicList.map(({id, img, name, link}) => (
        <li className={`music-list-li`} key={id}>
          <Link to={link}>
            <div className={`music-main-li`}>
              <img className={`music-main-img`} src={img} alt={name} />
              <p className={`music-main-name`}>{name}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default MainList
