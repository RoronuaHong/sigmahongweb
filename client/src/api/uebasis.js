import axios from './http'

function setUEBasisEditorContent(params) {
  return axios.post(`/uebasis/add`, params)
}

function updateUEBasisEditorContent(params) {
  return axios.post(`/uebasis/update`, params)
}

function getUEBasisEditorContent(params) {
  return axios.get(`/uebasis/get`, params)
}

function getUEBasisContentById(params) {
  return axios.post(`/uebasis/content`, params)
}

function delUEBasisEditorContent(params) {
  return axios.post(`/uebasis/delete`, params)
}

function delManyUEBasisEditorContent(params) {
  return axios.post(`/uebasis/deletemany`, params)
}

const uebasis = {
  getUEBasisContentById,
  setUEBasisEditorContent,
  getUEBasisEditorContent,
  updateUEBasisEditorContent,
  delUEBasisEditorContent,
  delManyUEBasisEditorContent,
}

export default uebasis
