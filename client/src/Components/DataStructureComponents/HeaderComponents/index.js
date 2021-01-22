import NavLogoWidgets from '../../../Widgets/NavLogo/index'

const HeaderComponents = props => {
  const { title } = props

  return (
    <div className={`datastructure-header`}>
      <NavLogoWidgets />
      <div className={`header-title`}>
        {title || `DataStructure List`}
      </div>
    </div>
  )
}

export default HeaderComponents
