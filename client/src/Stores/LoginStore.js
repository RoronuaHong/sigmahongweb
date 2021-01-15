import {
  action,
  observable,
  makeObservable,
} from 'mobx'
import api from './../api/api'

class LoginStore {
  constructor() {
    makeObservable(this)
  } 

  @observable loginStatus = {
    isLogin: false,
    msg: '',
    data: {}
  }
  
  @action
  async getLoginUser(params) {
      const result = await api.login.getLoginUser(params)
      const { msg, data, status } = result

      this.loginStatus = {
        msg,
        data,
        isLogin: Boolean(status)
      }
  }

  @action
  addLoginUser(params) {
    api.login.addLoginUser(params).then(res => {
      
    })
  }
}

export default LoginStore
