import { Link } from 'react-router-dom'


import cppList from '../../../../config/CppConfig'

const MainList = () => {
  const style = { background: '#0092ff', padding: '8px 0' }

  return (
    <ul className={`cpp-main-list`}>
      {cppList.map(({id, img, name, link}) => (
        <li className={`cpp-list-li`} key={id}>
          <Link to={link}>
            <div className={`cpp-main-li`}>
              <img className={`cpp-main-img`} src={img} alt={name} />
              <p className={`cpp-main-name`}>{name}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default MainList
