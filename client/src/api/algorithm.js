import axios from './http'

function getAlgorithmContent(params) {
  console.log(123)
  return axios.get(`/algorithm/get`, params)
}

function setAlgorithmContent(params) {
  return axios.post(`/algorithm/add`, params)
}

function getAlgorithmtById(params) {
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
  getAlgorithmtById,
  delAlgorithmContent,
  updateAlgorithmContent,
}

export default algorithm
