import { fetchPosts } from '../../api/api'
import axiosBack from '../../api/axiosBack'
import { setUser } from './authAction'

export const SET_ALLPOSTS = 'SET_ALLPOSTS'

export const setAllPosts = (posts) => ({ type: SET_ALLPOSTS, posts })

export const getAllPosts = () => {
  return async (dispatch) => {
    let posts = await fetchPosts()
    dispatch(setAllPosts(posts))
  }
}

export const getDeleteWallet = (id) => {
  return async (dispatch) => {
    const { data } = await axiosBack.delete(`/posts/${id}`)
    //zdes post rabotaet iz za arg value
    console.log('>deleteWallet-action', data)
    dispatch(setAllPosts(data))
    return data
  }
}
