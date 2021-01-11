import axios from 'axios'

/** 
 * 根据环境变量区分接口的默认地址
 */

switch(process.env.NODE_ENV) {
  case 'production':
    axios.default.baseURL = 'https://sigmahongweb.herokuapp.com/'

    break
  case 'test':
    axios.default.baseURL = 'HTTP://127.0.0.1:3000'

    break
  default:
    axios.default.baseURL = 'HTTP://127.0.0.1:3000'

    break
}

/**
 * 设置超时请求时间
 */
axois.default.timeout = 10000

/**
 * 设置COS跨域允许携带资源凭证
 */
axios.defaults.withCredentials = true

/**
 * 设置POST请求头, 告知服务器请求主体的数据格式
 */
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.transformRequest = data => qs.stringify(data)

/**
 * 设置请求拦截器
 * 客户端发送请求 -> [请求拦截器] -> 服务器
 * TOKEN校验(JWT): 接收服务器返回的token, 每次请求服务器都要带上token
 */
axios.interceptors.request.use(config => {
  // 添加TOKEN验证
  const token = localStorage.getItem(`token`)

  token && (config.headers.Authorization = token)

  return config
}, error => {
  return Promise.reject(error)  
})

/**
 * 响应拦截器
 * 服务器返回信息 -> [拦截的统一处理] -> 客户端获取信息
 */
axios.defaults.validataStatus = status => {
  // 自定义响应成功的HTTP状态代码
  return /^(2|3)\d{2}$/.test(status)
}

axios.interceptors.response.use(res => {
  // 只返回响应主体中的信息
  return res.data
}, error => {
  if(error.response) {
    // 请求已发送, 只不过状态码不是200系列
    switch(error.response.status) {
      case 401:
        break
      case 403:
        localStorage.removeItem(`token`)

        break
      case 404:
        break
    }
  } else {
    // 断网处理
    if(!window.navigator.onLine) {
      // 断开网络了, 可以让其跳转到断网页面
      return
    }

    return Promise.reject(error)
  }
})

export default axios
