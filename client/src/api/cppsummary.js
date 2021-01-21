import axios from './http'

function setCppSummaryEditorContent(params) {
  return axios.post(`/cppsummary/add`, params)
}

function updateCppSummaryEditorContent(params) {
  return axios.post(`/cppsummary/update`, params)
}

function getCppSummaryEditorContent(params) {
  return axios.get(`/cppsummary/get`, params)
}

function getCppSummaryContentById(params) {
  return axios.post(`/cppsummary/content`, params)
}

function delCppSummaryEditorContent(params) {
  return axios.post(`/cppsummary/delete`, params)
}

function delManyCppSummaryEditorContent(params) {
  return axios.post(`/cppsummary/deletemany`, params)
}

const cppsummary = {
  getCppSummaryContentById,
  setCppSummaryEditorContent,
  getCppSummaryEditorContent,
  updateCppSummaryEditorContent,
  delCppSummaryEditorContent,
  delManyCppSummaryEditorContent,
}

export default cppsummary
