import axiosBack from '../../api/axiosBack'
import { fetchAuth, fetchPosts } from '../../api/api'
import { setAllPosts } from './postsAction'

export const SET_USER = 'SET_USER'

export const setUser = (user) => ({ type: SET_USER, user })

export const getUser = (value) => {
  return async (dispatch) => {
    const { data } = await axiosBack.post('/auth/login', value)
    //zdes post rabotaet iz za arg value
    // console.log('>user-action', data)
    dispatch(setUser(data))
    return data
  }
}

export const getNewUser = (value) => {
  return async (dispatch) => {
    const { data } = await axiosBack.post('/auth/register', value)
    //zdes post rabotaet iz za arg value
    // console.log('>user-action', data)
    dispatch(setUser(data))
    return data
  }
}

// export const getAuthUser = () => {
//   return async (dispatch) => {
//     const data = await axiosBack
//       .get('/auth/me')
//       .then((response) => response.data)
//     console.log('>authUser-action', data)
//     dispatch(setUser(data))
//     return data
//   }
// }

export const getAuthUser = () => {
  return async (dispatch) => {
    let auths = await fetchAuth()
    console.log('=>auths', auths)
    dispatch(setAllPosts(auths))
  }
}

export const selectIsAuth = (state) => Boolean(state.user.user)
export const logout = () => {
  return async (dispatch) => {
    dispatch(setUser(null))
  }
}
