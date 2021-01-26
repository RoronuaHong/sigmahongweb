import React, { memo, useMemo, forwardRef, useCallback } from 'react' 
import classnames from 'classnames' 
import PropTypes from 'prop-types' 
import './index.scss' 

const Icon = forwardRef((props, ref) => {
  const { type, className, size, backdrop, color, click, mouseEnter, mouseOut } = props 

  const cls = classnames(
    {
      iconfont: true,
      [`icon-${type}`]: true,
      [`icon-color-${color}`]: color ? true : false
    },
    className
  )

  const handleClick = useCallback(
    e => {
        click && click(e) 
    },
    [click]
  ) 

  const handleMouseEnter = useCallback(() => {
    mouseEnter && mouseEnter() 
  }, [mouseEnter]) 

  const handleMouseOut = useCallback(() => {
    mouseOut && mouseOut() 
  }, [mouseOut]) 

  const MyIcon = (
    <i
      className={cls}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseOut={handleMouseOut}
    ></i>
  ) 

  if (backdrop) {
    return (
        <span className='backdrop'>
            {MyIcon}
        </span>
    ) 
  }

  return MyIcon 
}) 

Icon.defaultProps = {
  size: 16,
  backdrop: false,
  type: '',
  color: ''
} 

Icon.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string,
  backdrop: PropTypes.bool,
  type: PropTypes.string.isRequired,
  color: PropTypes.string,
  click: PropTypes.func,
  mouseEnter: PropTypes.func,
  mouseOut: PropTypes.func
} 

export default memo(Icon) 
