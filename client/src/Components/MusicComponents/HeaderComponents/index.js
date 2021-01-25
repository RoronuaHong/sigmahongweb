import NavLogoWidgets from '../../../Widgets/NavLogo/index'

const HeaderComponents = props => {
  const { title } = props

  return (
    <div className={`music-header`}>
      <NavLogoWidgets />
      <div className={`header-title`}>
        {title || `Music`}
      </div>
    </div>
  )
}

export default HeaderComponents
