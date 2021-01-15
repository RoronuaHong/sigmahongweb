import MyLogo from '../../../assets/Images/MyLogo.png'

const Header = ({...props}) => (
  <div className='home-nav'>
    <div className='nav-logo'>
      <a href='/'>
        <img className='nav-img' src={MyLogo} alt={`myLogo`} />
        <span className={`nav-name`}>SigmaHong</span>
      </a>
    </div>
    {props.children}
  </div>
)

export default Header;