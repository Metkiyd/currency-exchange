import { SET_SELECTEDVALUTE } from '../actions/selectedValuteAction'

const initialState = {
  selectedValute: null,
  isFetching: false,
}

export default function selectedValuteReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTEDVALUTE: {
      return {
        ...state,
        selectedValute: action.selectedValute,
      }
    }

    default:
      return state
  }
}
