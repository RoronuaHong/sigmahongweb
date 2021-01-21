import axios from './http'

function getAlgorithmContent(params) {
  return axios.get(`/algorithm/get`, params)
}

function setAlgorithmContent(params) {
  return axios.post(`/algorithm/add`, params)
}

function getAlgorithmById(params) {
  return axios.post(`/algorithm/content`, params)
}

function delAlgorithmContent(params) {
  return axios.post(`/algorithm/delete`, params)
}

function updateAlgorithmContent(params) {
  return axios.post(`/algorithm/update`, params)
}

const algorithm = {
  getAlgorithmContent,
  setAlgorithmContent,
  getAlgorithmById,
  delAlgorithmContent,
  updateAlgorithmContent,
}

export default algorithm
