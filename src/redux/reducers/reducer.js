import {SET_ALLVALUTES} from "../actions/action";


const initialState = {
  allValutes: [],
  isFetching: false,
};

export default function allValutesReducer(state = initialState, action) {
  switch (action.type) {

    case SET_ALLVALUTES: {
      return {
        ...state,
        allValutes: action.allValutes,
      };
    }

    default:
      return state;
  }
}