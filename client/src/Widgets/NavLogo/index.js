import MyLogo from '../../assets/Images/MyLogo.png'

import './index.scss'

const NavLogoWidgets = () => {
  return (
    <div className='nav-logo'>
      <a href='/'>
        <img className='nav-img' src={MyLogo} alt={`myLogo`} />
        <span className={`nav-name`}>SigmaHong</span>
      </a>
    </div>
  )
}

export default NavLogoWidgets
