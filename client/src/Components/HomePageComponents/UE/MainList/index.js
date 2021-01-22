import { Link } from 'react-router-dom'

import ueList from '../../../../config/UEConfig'

import './index.scss'

const MainList = () => {
  return (
    <ul className={`ue-main-list`}>
      {ueList.map(({id, img, name, link}) => (
        <li className={`ue-list-li`} key={id}>
          <Link to={link}>
            <div className={`ue-main-li`}>
              <img className={`ue-main-img`} src={img} alt={name} />
              <p className={`ue-main-name`}>{name}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default MainList
