import axios from './http'

function getDatastructureContent(params) {
  return axios.get(`/datastructure/get`, params)
}

function setDatastructureContent(params) {
  return axios.post(`/datastructure/add`, params)
}

function updateDatastructureContent(params) {
  return axios.post(`/datastructure/update`, params)
}

function getDatastructureContentById(params) {
  return axios.post(`/datastructure/content`, params)
}

function delDatastructureContent(params) {
  return axios.post(`/datastructure/delete`, params)
}

function delManyDatastructureContent(params) {
  return axios.post(`/datastructure/deletemany`, params)
}

const datastructure = {
  getDatastructureContentById,
  setDatastructureContent,
  getDatastructureContent,
  updateDatastructureContent,
  delDatastructureContent,
  delManyDatastructureContent,
}

export default datastructure
