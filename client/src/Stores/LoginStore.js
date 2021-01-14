import {
  toJS,
  action,
  computed,
  observable,
  makeObservable,
} from 'mobx'

import api from './../api/api'

class LoginStore {
  constructor() {
    makeObservable(this)
  } 

  @observable isLogin = false

 @action
  getLoginUser(params) {
    api.login.getLoginUser().then(res => {
      const username = res[0].username
      const password = res[0].password

      if(params.username === username && params.password === password) {
        this.isLogin = true
      } else {
         this.isLogin = false
      }
    })
  }

  @action
  addLoginUser(params) {
    api.login.addLoginUser(params).then(res => {
      
    })
  }
}

export default LoginStore
