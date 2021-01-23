const ContentComponents = props => {
  return (
    <div className={`ue-content`}>
      <div className={`content-left`}></div>
      <div className={`content-main`}>
        {props.children}
      </div>
      <div className={`content-right`}></div>
    </div>
  )
}

export default ContentComponents
