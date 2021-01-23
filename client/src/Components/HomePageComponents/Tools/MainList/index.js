import { Link } from 'react-router-dom'

import toolsList from '../../../../config/ToolsConfig'

import './index.scss'

const MainList = () => {
  return (
    <ul className={`tools-main-list`}>
      {toolsList.map(({id, img, name, link}) => (
        <li className={`tools-list-li`} key={id}>
          <Link to={link}>
            <div className={`tools-main-li`}>
              <img className={`tools-main-img`} src={img} alt={name} />
              <p className={`tools-main-name`}>{name}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default MainList
