import axios from './http'

function getName() {
  return axios.get(`/user`)
}

const cppsummary = {
  getName
}

export default cppsummary
