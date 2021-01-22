/**
 * 这里数据请求的唯一入口
 */
import login from './login'
import cppsummary from './cppsummary'
import algorithm from './algorithm'
import datastructure from './datastructure'

const api = {
  login,
  algorithm,
  cppsummary,
  datastructure,
}

export default api
