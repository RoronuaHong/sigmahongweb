import { Link } from 'react-router-dom';

const MainList = () => {
  const cppList = [{
    id: 0,
    name: `Summary`,
    link: `/cpp-summary`
  }, {
    id: 1,
    name: `Algorithm`,
    link: `/cpp-algorithm`
  }];

  return (
    <ul className={`cpp-main-list`}>
      {cppList.map(({id, name, link}) => (
        <Link to={link} key={id}>
          <li>{name}</li>
        </Link>
      ))}
    </ul>
  )
}

export default MainList;