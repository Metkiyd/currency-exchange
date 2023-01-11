import { SET_ALLPOSTS } from '../actions/postsAction'

const initialState = {
  posts: [],
  isFetching: false,
}

export default function allPostsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ALLPOSTS: {
      return {
        ...state,
        posts: action.posts,
      }
    }

    default:
      return state
  }
}
