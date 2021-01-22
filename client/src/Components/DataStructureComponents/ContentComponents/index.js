const ContentComponents = props => {
  return (
    <div className={`algorithm-content`}>
      <div className={`content-left`}></div>
      <div className={`content-main`}>
        {props.children}
      </div>
      <div className={`content-right`}></div>
    </div>
  )
}

export default ContentComponents
