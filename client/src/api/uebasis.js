import axios from './http'

function setUEBasisContent(params) {
  return axios.post(`/uebasis/add`, params)
}

function updateUEBasisContent(params) {
  return axios.post(`/uebasis/update`, params)
}

function getUEBasisContent(params) {
  return axios.get(`/uebasis/get`, params)
}

function getUEBasisContentById(params) {
  return axios.post(`/uebasis/content`, params)
}

function delUEBasisContent(params) {
  return axios.post(`/uebasis/delete`, params)
}

function delManyUEBasisContent(params) {
  return axios.post(`/uebasis/deletemany`, params)
}

const uebasis = {
  getUEBasisContentById,
  setUEBasisContent,
  getUEBasisContent,
  updateUEBasisContent,
  delUEBasisContent,
  delManyUEBasisContent,
}

export default uebasis
