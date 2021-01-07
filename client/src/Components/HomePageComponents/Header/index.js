import MyLogo from '../../../Images/MyLogo.png';

const Header = ({...props}) => (
  <div className='home-nav'>
    <div className='nav-logo'>
      <a href='/'>
        <img className='nav-img' src={MyLogo} alt={`myLogo`} />
      </a>
    </div>
    {props.children}
  </div>
);

export default Header;