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
  return async () => {
    try {
      const { data } = await axiosBack.delete(`/posts/${id}`)
      // console.log('>deleteWallet-action', data)
    } catch (e) {
      toast.error(e.response?.data?.message)
    }
  }
}
