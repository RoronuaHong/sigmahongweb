import axios from './http'

function setDatastructureEditorContent(params) {
  return axios.post(`/datastructure/add`, params)
}

function updateDatastructureEditorContent(params) {
  return axios.post(`/datastructure/update`, params)
}

function getDatastructureEditorContent(params) {
  return axios.get(`/datastructure/get`, params)
}

function getDatastructureContentById(params) {
  return axios.post(`/datastructure/content`, params)
}

function delDatastructureEditorContent(params) {
  return axios.post(`/datastructure/delete`, params)
}

function delManyDatastructureEditorContent(params) {
  return axios.post(`/datastructure/deletemany`, params)
}

const datastructure = {
  getDatastructureContentById,
  setDatastructureEditorContent,
  getDatastructureEditorContent,
  updateDatastructureEditorContent,
  delDatastructureEditorContent,
  delManyDatastructureEditorContent,
}

export default cppsummary
