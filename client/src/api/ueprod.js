import axios from './http'

function setUEProdContent(params) {
  return axios.post(`/ueprod/add`, params)
}

function updateUEProdContent(params) {
  return axios.post(`/ueprod/update`, params)
}

function getUEProdContent(params) {
  return axios.get(`/ueprod/get`, params)
}

function getUEProdContentById(params) {
  return axios.post(`/ueprod/content`, params)
}

function delUEProdContent(params) {
  return axios.post(`/ueprod/delete`, params)
}

function delManyUEProdContent(params) {
  return axios.post(`/ueprod/deletemany`, params)
}

const ueprod = {
  getUEProdContentById,
  setUEProdContent,
  getUEProdContent,
  updateUEProdContent,
  delUEProdContent,
  delManyUEProdContent,
}

export default ueprod
