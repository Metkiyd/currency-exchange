import axiosBack from '../../api/axiosBack'
import { toast } from 'react-toastify'

export const SET_USER = 'SET_USER'

export const setUser = (user) => ({ type: SET_USER, user })

export const getNewUser = (value) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosBack.post('/auth/register', value)
      // console.log('=>data-reg-action', data)
      if (data.accessToken) {
        localStorage.setItem('authorized', data.accessToken)
      }
      dispatch(setUser(data))
      return data
    } catch (e) {
      toast.error(e.response?.data?.message)
    }
  }
}

export const getUser = (value) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosBack.post('/auth/login', value)
      // console.log('=>data-login-action', data)
      if (data.accessToken) {
        localStorage.setItem('authorized', data.accessToken)
      }
      dispatch(setUser(data))
      return data
    } catch (e) {
      toast.error(e.response?.data?.message)
    }
  }
}

export const getAuthUser = () => {
  return async (dispatch) => {
    try {
      const { data } = await axiosBack.get('/auth/refresh')
      // console.log('=>data-auth-action', data)

      localStorage.setItem('authorized', data.accessToken)
      dispatch(setUser(data))
      return data
    } catch (e) {
      toast.error(e.response?.data?.message)
    }
  }
}

export const getUserAvatar = () => {
  return async (dispatch) => {
    const { data } = await axiosBack.get('/auth/me')
    dispatch(setUser(data))
    return data
  }
}

export const logout = () => {
  return async (dispatch) => {
    try {
      const { data } = await axiosBack.post('/auth/logout')
      console.log('=>data-logout', data)

      localStorage.removeItem('authorized')
      dispatch(setUser(null))
    } catch (e) {
      toast.error(e.response?.data?.message)
    }
  }
}

export const selectIsAuth = (state) => Boolean(state.user.user)

// export const logout = () => {
//   return async (dispatch) => {
//     dispatch(setUser(null))
//   }
// }

// export const getAuthUser = () => {
//   return async (dispatch) => {
//     try {
//       const { data } = await axiosBack.get('/auth/me')
//       dispatch(setUser(data))
//       return data
//     } catch (e) {
//       alert(e.response?.data?.message)
//     }
//   }
// }
