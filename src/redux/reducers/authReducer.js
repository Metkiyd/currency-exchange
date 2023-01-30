import { SET_USER, WAIT_USER } from '../actions/authAction'

const initialState = {
  user: null,
  isLoading: false,
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        user: action.user,
        isLoading: false,
      }
    }
    case WAIT_USER: {
      return {
        ...state,
        isLoading: true,
      }
    }

    default:
      return state
  }
}
