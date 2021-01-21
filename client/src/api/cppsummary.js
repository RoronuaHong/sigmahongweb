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

const cppsummary = {
  getCppSummaryContentById,
  setCppSummaryEditorContent,
  getCppSummaryEditorContent,
  delCppSummaryEditorContent,
  updateCppSummaryEditorContent,
}

export default cppsummary
