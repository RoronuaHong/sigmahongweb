import API from '../config/api'

export const login = (params) => {
  return instance.get(API.DEMO_API, { params: params })
}
