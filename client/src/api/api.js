/**
 * 这里数据请求的唯一入口
 */
import login from './login'
import cppsummary from './cppsummary'
import algorithm from './algorithm'
import datastructure from './datastructure'
import uebasis from './uebasis'
import ueprod from './ueprod'
import chrome from './chrome'

const api = {
  login,
  algorithm,
  cppsummary,
  datastructure,
  uebasis,
  chrome,
  ueprod,
}

export default api
