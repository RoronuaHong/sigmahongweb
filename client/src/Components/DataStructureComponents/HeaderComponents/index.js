import NavLogoWidgets from '../../../Widgets/NavLogo/index'

const HeaderComponents = props => {
  const { title } = props

  return (
    <div className={`algorithm-header`}>
      <NavLogoWidgets />
      <div className={`header-title`}>
        {title || `Algorithm List`}
      </div>
    </div>
  )
}

export default HeaderComponents
