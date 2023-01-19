import { fetchPosts } from '../../api/api'
import axiosBack from '../../api/axiosBack'
import { setUser } from './authAction'
import { toast } from 'react-toastify'

export const SET_ALLPOSTS = 'SET_ALLPOSTS'

export const setAllPosts = (posts) => ({ type: SET_ALLPOSTS, posts })

export const getAllPosts = () => {
  return async (dispatch) => {
    try {
      let posts = await fetchPosts()
      dispatch(setAllPosts(posts))
    } catch (e) {
      toast.error(e.response?.data?.message)
    }
  }
}

export const getDeleteWallet = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosBack.delete(`/posts/${id}`)
      //zdes post rabotaet iz za arg value
      // console.log('>deleteWallet-action', data)
      dispatch(setAllPosts(data))
      return data
    } catch (e) {
      toast.error(e.response?.data?.message)
    }
  }
}
