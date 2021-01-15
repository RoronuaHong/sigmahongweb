import axios from './http'

function getLoginUser(params) {
  return axios.post(`/login`, params)
}

function addLoginUser(params) {
  return axios.post(`/login/register`, params)
}

const login = {
  getLoginUser,
  addLoginUser
}

export default login
