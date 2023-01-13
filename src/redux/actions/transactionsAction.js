import { fetchTransactions } from '../../api/api'

export const SET_TRANSACTIONS = 'SET_TRANSACTIONS'

export const setTransactions = (transactions) => ({
  type: SET_TRANSACTIONS,
  transactions,
})

export const getTransactions = () => {
  return async (dispatch) => {
    let posts = await fetchTransactions()
    dispatch(setTransactions(posts))
  }
}
