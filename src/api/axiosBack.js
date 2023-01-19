import axios from 'axios'
import mem from 'mem'
export const maxAge = 15000
export const API_URL = `http://localhost:4444/auth`

const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:4444',
})

instance.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem('authorized')
  return config
})

const memo = async () => {
  const response = await axios.get(`${API_URL}/refresh`, {
    withCredentials: true,
  })
  localStorage.setItem('authorized', response.data.accessToken)

  return response.data.accessToken
}

export const memoizedToken = mem(memo, {
  maxAge,
})

instance.interceptors.response.use(
  (config) => {
    return config
  },
  async (error) => {
    const originalRequest = error.config
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true
      try {
        const access = await memoizedToken()

        const config = {
          ...originalRequest,
          headers: {
            ...originalRequest.headers,
            Authorization: access,
          },
        }

        return instance.request(config)
      } catch (e) {
        alert(
          e.response?.data?.message,
          // 'Not Authorized',
        )
      }
    }
    throw error
  },
)

export default instance
