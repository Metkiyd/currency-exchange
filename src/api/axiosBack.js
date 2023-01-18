import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:4444',
})

instance.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem('authorized')
  return config
})

export default instance
