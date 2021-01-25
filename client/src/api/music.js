import axios from './http'

function setMusicContent(params) {
  return axios.post(`/music/add`, params)
}

function getMusicContent(params) {
  return axios.get(`/music/get`, params)
}

function delMusicContent(params) {
  return axios.post(`/uebasis/delete`, params)
}

function updateMusicContent(params) {
  return axios.post(`/uebasis/update`, params)
}

const music = {
  setMusicContent,
  getMusicContent,
  delMusicContent,
  updateMusicContent
}

export default music