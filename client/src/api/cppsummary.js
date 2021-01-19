import axios from './http'

function getName() {
  return axios.get(`/user`)
}

function setCppSummaryEditorContent(params) {
  return axios.post(`/cppsummary/add`, params)
}

function getCppSummaryEditorContent(params) {
  return axios.get(`/cppsummary/get`, params)
}

function getCppSummaryContentById(params) {
  return axios.post(`/cppsummary/content`, params)
}

const cppsummary = {
  getName,
  setCppSummaryEditorContent,
  getCppSummaryEditorContent,
  getCppSummaryContentById
}

export default cppsummary
