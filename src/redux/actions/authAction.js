import axiosBack from '../../api/axiosBack'

export const SET_USER = 'SET_USER'

export const setUser = (user) => ({ type: SET_USER, user })

export const getUser = (value) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosBack.post('/auth/login', value)
      dispatch(setUser(data))
      return data
    } catch (e) {
      alert(e.response.data.message)
    }
  }
}

export const getNewUser = (value) => {
  return async (dispatch) => {
    const { data } = await axiosBack.post('/auth/register', value)
    dispatch(setUser(data))
    return data
  }
}

export const getAuthUser = () => {
  return async (dispatch) => {
    const { data } = await axiosBack.get('/auth/me')
    dispatch(setUser(data))
    return data
  }
}

export const getUserAvatar = () => {
  return async (dispatch) => {
    const { data } = await axiosBack.get('/auth/me')
    dispatch(setUser(data))
    return data
  }
}

export const selectIsAuth = (state) => Boolean(state.user.user)
export const logout = () => {
  return async (dispatch) => {
    dispatch(setUser(null))
  }
}
