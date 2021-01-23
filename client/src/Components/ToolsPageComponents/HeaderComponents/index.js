import NavLogoWidgets from '../../../Widgets/NavLogo/index'

const HeaderComponents = props => {
  const { title } = props

  return (
    <div className={`tools-header`}>
      <NavLogoWidgets />
      <div className={`header-title`}>
        {title || `Chrome Extensions List`}
      </div>
    </div>
  )
}

export default HeaderComponents
