import { SET_TRANSACTIONS } from '../actions/transactionsAction'

const initialState = {
  transactions: [],
  isFetching: false,
}

export default function transactionsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TRANSACTIONS: {
      return {
        ...state,
        transactions: action.transactions,
      }
    }

    default:
      return state
  }
}
