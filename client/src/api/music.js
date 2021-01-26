import axios from './http'

function getMusicContentById(params) {
  return axios.post(`/music/content`, params)
}

function delMusicContent(params) {
  return axios.post(`/music/delete`, params)
}

function updateMusicContent(params) {
  return axios.post(`/music/update`, params)
}

const music = {
  getMusicContentById,
  delMusicContent,
  updateMusicContent
}

export default music