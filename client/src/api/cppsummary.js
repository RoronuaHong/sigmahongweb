import axios from './http'

function getName() {
  return axios.get(`/user`)
}

function setCppSummaryEditorContent(params) {
  return axios.post(`/cppsummary/add`, params)
}

const cppsummary = {
  getName,
  setCppSummaryEditorContent
}

export default cppsummary
