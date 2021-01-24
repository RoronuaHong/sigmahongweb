import NavLogoWidgets from '../../../Widgets/NavLogo/index'

const HeaderComponents = props => {
  const { title } = props

  return (
    <div className={`ue-header`}>
      <NavLogoWidgets />
      <div className={`header-title`}>
        {title || `UE Production List`}
      </div>
    </div>
  )
}

export default HeaderComponents
