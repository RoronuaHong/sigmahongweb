/**
 * 操作local数据的工具函数模块
 */
import store from 'store'
const USER_KEY = `user_key`
const ID_KEY = `id_key`

const modules = {
  /**
   * 保存user
   */
  saveUser(user) {
    // localStorage.setItem(USER_KEY, JSON.stringify(user))
    store.set(USER_KEY, user)
  },
  /**
   * 返回一个user对象, 如果没有的话返回{}
   */
  getUser() {
    // return JSON.parse(localStorage.getItem(USER_KEY)) || {}
    return store.get(USER_KEY) || {}
  },
  /**
   * 删除保存的user
   */
  removeUser() {
    // localStorage.removeItem(USER_KEY)
    store.remove(USER_KEY)
  },

  /**
   * 保存id
   */
  saveId(id) {
    // localStorage.setItem(ID_KEY, JSON.stringify(id))
    store.set(ID_KEY, id)
  },
  /**
   * 返回一个id对象, 如果没有的话返回{}
   */
  getId() {
    // return JSON.parse(localStorage.getItem(ID_KEY)) || {}
    return store.get(ID_KEY) || {}
  },
  /**
   * 删除保存的id
   */
  removeId() {
    // localStorage.removeItem(ID_KEY)
    store.remove(ID_KEY)
  }
}

export default modules
