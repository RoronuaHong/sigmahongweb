import NavLogoWidgets from '../../../Widgets/NavLogo/index'

const HeaderComponents = props => {
  const { title } = props

  return (
    <div className={`summary-header`}>
      <NavLogoWidgets />
      <div className={`header-title`}>
        {title || `Cpp Summary List`}
      </div>
    </div>
  )
}

export default HeaderComponents
