import { fetchPosts } from '../../api/api'

export const SET_ALLPOSTS = 'SET_ALLPOSTS'

export const setAllPosts = (posts) => ({ type: SET_ALLPOSTS, posts })

export const getAllPosts = () => {
  return async (dispatch) => {
    let posts = await fetchPosts()
    dispatch(setAllPosts(posts))
  }
}
