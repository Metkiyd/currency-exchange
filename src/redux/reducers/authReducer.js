import {SET_USER} from "../actions/authAction";


const initialState = {
  user: null,
  isFetching: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {

    case SET_USER: {
      return {
        ...state,
        user: action.user,
      };
    }

    default:
      return state;
  }
}