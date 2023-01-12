import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getAuthUser, selectIsAuth } from './redux/actions/authAction'

import AppRouter from './router/AppRouter'

function App() {
  // const dispatch = useDispatch()
  // const isAuth = useSelector(selectIsAuth)
  // console.log('=>isAuth', isAuth)

  // useEffect(() => {
  //   dispatch(getAuthUser())
  // }, [])

  return <AppRouter />
}
export default App
