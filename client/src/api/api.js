/**
 * 这里数据请求的唯一入口
 */
import login from './login'
import cppsummary from './cppsummary'
import algorithm from './algorithm'

const api = {
  login,
  algorithm,
  cppsummary,
}

export default api
