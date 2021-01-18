import CppSummaryListComponents from '../CppSummaryListComponents/index'

const ContentComponents = () => {
  return (
    <div className={`summary-content`}>
      <div className={`content-left`}></div>
      <div className={`content-main`}>
        <CppSummaryListComponents />
      </div>
      <div className={`content-right`}></div>
    </div>
  )
}

export default ContentComponents
