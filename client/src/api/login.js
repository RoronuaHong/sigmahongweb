import axios from './http'

function getLoginUser(params) {
  return axios.get(`/login`, params)
}

function addLoginUser(params) {
  return axios.post(`/login/add`, params)
}

const login = {
  getLoginUser,
  addLoginUser
}

export default login
