import axios from 'axios'
import globalCode from '../constants/globalCode'
import {createHashHistory} from 'history'

const instance = axios.create({
  //当创建实例的时候配置默认配置
  xsrfCookieName: 'xsrf-token'
})

//添加请求拦截器
instance.interceptors.request.use(function(config){
  console.log(`拦截器`)

  return config
},function(error){
  return Promise.reject(error)
})

//添加一个响应拦截器
instance.interceptors.response.use(function (response) {
  // 1.成功
  if (response.data.success && response.data.messageCode === globalCode.success) {
      console.log(`success!`)

      return response.data.data
  }

  // 2.session过期
  if (!response.data.success && response.data.messageCode === globalCode.timeout) {
      createHashHistory().push('/login')

      // 定义一个messagecode在后面会用到
      return Promise.reject({
          messageCode: 'timeout'
      })
  }

  // 3.11111111 系统异常、网络异常
  if (response.data.success && response.data.messageCode === globalCode.busyCode) {
      return Promise.reject({
          messageCode: 'netError'
      })
  }

  // 3.其他失败，比如校验不通过等
  return Promise.reject(response.data);
}, function () {
  
  return Promise.reject({
      messageCode: 'sysError'
  })
})

export default instance
