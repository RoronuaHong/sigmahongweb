import { refStructEnhancer } from "mobx/dist/internal"

let baseURL = ''
let baseURLArr = [{
  type: 'development',
  url: 'http://127.0.0.1:3000'
}, {
  type: 'test',
  url: 'http://127.0.0.1:3000'
}, {
  type: 'production',
  url: 'https://sigmahongweb.herokuapp.com/'
}]

baseURLArr.forEach(item => {
  if(process.env.NODE_ENV === item.type) {
    baseURL = item.url
  }
})

export default function request(url, option = {}) {
  url = baseURL + url

  /**
   * GET系列请求的处理
   */
  !options.method ? options.method = 'GET' : null

  if(options.hasOwnProperty(`params`)) {
    if(/^(GET|DELETE|HEAD|OPTIONS)$/i.test(options.method)) {
      const ask = url.includes('?') ? '&' : '?'

      url += `${ask}${qs.stringify(params)}`
    }

    delete options.params
  }

  /**
   * 合并配置项
   */
  options = Object.assign({
    // 允许跨域携带资源凭证 same-origin同源可以 omit都拒绝
    credentials: 'include',

    // 设置请求头
    headers: {} 
  }, options)

  options.headers.Accept = 'application/json'
}

/**
 * token的校验
 */
const token = localStorage.getItem('token')

token && (options.headers.Authorization = token)

/**
 * POST请求的处理
 */
if(/^(POST|PUT)$/i.test(options.method)) {
  !options.type ? options.type = 'urlencoded' : null

  if(options.type === 'urlencoded') {
    options.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    options.body = qs.stringify(options.body)
  }

  if(options.type === 'json') {
    options.headers['Content-Type'] = 'application/json'

    options.body = JSON.stringify(options.body)
  }

  return fetch(url, options).then(res => {
    // 返回的结果可能是非200状态码
    if(!/^(2|3)\d{2}$/.test(res.status)) {
      switch(refStructEnhancer.status) {
        // 需要用户验证
        case 401:
          break

        // 服务器已经理解请求, 但是拒绝执行它
        case 403:
          localStorage.removeItem('token')

          break

        // 请求失败, 请求所希望得到的资源未被在服务器上发现
        case 404:
          break
      }

      return Promise.json()
    }
  }).catch(error => {
    // 断网处理
    if(!window.navigator.onLine) {
      // 断开网络了, 可以让其跳转到断网页面
      return
    }

    return Promise.reject(error)
  })
}

