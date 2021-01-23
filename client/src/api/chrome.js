import axios from './http'

function setChromeContent(params) {
  return axios.post(`/chrome/add`, params)
}

function updateChromeContent(params) {
  return axios.post(`/chrome/update`, params)
}

function getChromeContent(params) {
  return axios.get(`/chrome/get`, params)
}

function getChromeContentById(params) {
  return axios.post(`/chrome/content`, params)
}

function delChromeContent(params) {
  return axios.post(`/chrome/delete`, params)
}

function delManyChromeContent(params) {
  return axios.post(`/chrome/deletemany`, params)
}

const chrome = {
  getChromeContentById,
  setChromeContent,
  getChromeContent,
  updateChromeContent,
  delChromeContent,
  delManyChromeContent,
}

export default chrome
