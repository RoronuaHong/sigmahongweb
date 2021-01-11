import axios from './http'

function getName() {
  return axios.get(`/user`)
}

export default {
  getName
}
