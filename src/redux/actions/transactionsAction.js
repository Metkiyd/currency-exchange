import { fetchTransactions } from '../../api/api'
import { toast } from 'react-toastify'

export const SET_TRANSACTIONS = 'SET_TRANSACTIONS'

export const setTransactions = (transactions) => ({
  type: SET_TRANSACTIONS,
  transactions,
})

export const getTransactions = () => {
  return async (dispatch) => {
    try {
      const transactions = await fetchTransactions()
      dispatch(setTransactions(transactions))
    } catch (e) {
      toast.error(e.response?.data?.message)
    }
  }
}
