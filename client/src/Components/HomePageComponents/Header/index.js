import NavLogoWidgets from '../../../Widgets/NavLogo/index'

const Header = ({...props}) => (
  <div className='home-nav'>
    <NavLogoWidgets />
    {props.children}
  </div>
)

export default Header
