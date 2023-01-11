import AppRouter from './router/AppRouter'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAuthUser, selectIsAuth } from './redux/actions/authAction'

function App() {
  const dispatch = useDispatch()
  const isAuth = useSelector(selectIsAuth)
  console.log('=>isAuth', isAuth)

  useEffect(() => {
    dispatch(getAuthUser())
  }, [])

  return <AppRouter />
}
export default App
