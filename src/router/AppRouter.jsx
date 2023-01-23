import React from 'react' // useEffect

import {
  // useDispatch,
  useSelector,
} from 'react-redux'
import { Route, Routes, Navigate } from 'react-router-dom'
import {
  // getAuthUser,
  selectIsAuth,
} from '../redux/actions/authAction'

import { MainPage } from '../pages/MainPage'
import { LoginPage } from '../pages/LoginPage'
import { RegistrationPage } from '../pages/RegistrationPage'
import { ExchangeRatePage } from '../pages/ExchangeRatePage'
import { ProfilePage } from '../pages/ProfilePage'
import { CurrencyExchangePage } from '../pages/CurrencyExchangePage'
import { WalletsPage } from '../pages/WalletsPage'
import { TransactionPage } from '../pages/TransactionPage'
import { SelectedWallet } from '../pages/WalletsPage/SelectedWallet'
import { Layout } from '../components/Layout'
import Examples from '../examples'

const routes = [
  {
    path: '/',
    element: <MainPage />,
    private: false,
  },
  {
    path: '*',
    element: <Navigate to='/' replace />,
    private: false,
  },
  {
    path: '/login',
    element: <LoginPage />,
    private: false,
  },
  {
    path: '/registration',
    element: <RegistrationPage />,
    private: false,
  },
  {
    path: '/',
    element: <Navigate to='/exchange-rate' replace />,
    private: true,
  },

  {
    path: '*',
    element: <Navigate to='/' replace />,
    private: true,
  },
  {
    path: 'exchange-rate',
    element: <ExchangeRatePage />,
    private: true,
  },

  {
    path: 'profile',
    element: <ProfilePage />,
    private: true,
  },
  {
    path: 'currency-exchange',
    element: <CurrencyExchangePage />,
    private: true,
  },
  {
    path: 'wallets',
    element: <WalletsPage />,
    private: true,
  },
  {
    path: 'wallets/:id',
    element: <SelectedWallet />,
    private: true,
  },

  {
    path: 'transactions',
    element: <TransactionPage />,
    private: true,
  },
  {
    path: 'examples',
    element: <Examples />,
    private: true,
  },
]

const AppRouter = () => {
  // const dispatch = useDispatch()
  const isAuth = useSelector(selectIsAuth)

  // useEffect(() => {
  //   dispatch(getAuthUser())
  // }, [])

  return (
    <Routes>
      {routes
        .filter((route) => (isAuth ? route.private : !route.private))
        .map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
    </Routes>
  )
}

export default AppRouter
