import './index.scss'

const CppSummaryListComponents = () => {
  return (
    <div className={`summary-list`}>
      <div className={`summary-li`}>
        <a href='#' target='_blank'>
          <h2><font color={`#EE0000`}>{`[置顶]`}</font>demo</h2>
          <div className={`post-content-preview`}>
            2018 年 12 月 ，Google  宣布 Flutter 1.0 版本正式发布。截至目前， Flutter 在 Github 上已获得 88000+ 的关注和 11000+ 的 Fork ，其发展速度相当惊人，是今年移动端最火热的开发框架之一。Flutter 大火背后的原因是什么？为什么越来越多的企业和开发者会选择使用 Flutter？Flutter 会成为跨平台开发的终极...
          </div>
        </a>
        <p className={`post-meta`}>
          Posted by Gityuan on January 31, 2016
        </p>
        <hr/>
      </div>
      <div className={`summary-li`}>
        <a href='#' target='_blank'>
          <h2><font>{`[置顶]`}</font>demo</h2>
          <div className={`post-content-preview`}>
            Flutter 会成为跨平台开发的终极...
          </div>
        </a>
        <p className={`post-meta`}>
          Posted by Gityuan on January 31, 2016
        </p>
        <hr/>
      </div>
    </div>
  )
}

export default CppSummaryListComponents
