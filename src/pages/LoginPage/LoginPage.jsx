import React, { useState } from 'react'

import { MyButton } from '../../components/MyUI/MyButton'
import { MyInput } from '../../components/MyUI/MyInput'
import { MyCheckbox } from '../../components/MyUI/MyCheckbox'

import { Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, selectIsAuth } from '../../redux/actions/authAction'

import styles from '../LoginPage/styles.module.scss'

import loginImage from '../../assets/images/login.png'
import { ReactComponent as GoogleIcon } from '../../assets/icons/googleIcon.svg'
import { ReactComponent as GitHubIcon } from '../../assets/icons/githubIcon.svg'

const LoginPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [form, setForm] = useState({})

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleLogin = async () => {
    const user = await dispatch(getUser(form))
    // console.log('=>disp-handleLogin', user)

    if (user.token) {
      localStorage.setItem('authorized', JSON.stringify(user.token))
    }

    // const allUsers = JSON.parse(localStorage.getItem("allUsers"))
    // console.log('===>Users', allUsers)
    //
    // const loggedUser = allUsers.find(user => form.email === user.email)
    // console.log('===>loggedUser', loggedUser)
    //
    // if (form.email === loggedUser.email && form.password === loggedUser.password) {
    //   localStorage.setItem("authorized", JSON.stringify(loggedUser.id))
    //
    //   // localStorage.setItem("loggedUser", JSON.stringify(loggedUser))
    //   //для наглядности
    //   // navigate(`/exchange-rate`, {replace: true})
    //
    // } else {
    //   alert('Wrong Email or Password')
    // }
  }

  // const User = useSelector((state) => state.user.user)
  // console.log('=>User-State', User)

  // const isAuth = useSelector(selectIsAuth)
  // console.log('=>isAuth', isAuth)
  //
  // if (isAuth) {
  //   return <Navigate to='/exchange-rate' />
  // }

  return (
    <div className={styles.login}>
      <div className={styles.left_side}>
        <div className={styles.left_side__container}>
          <h1 className={styles.left_side__title}>Вход</h1>
          <div className={styles.form__sing_up}>
            <MyButton
              size='mediumWithIcon'
              variant='outlined'
              startIcon={<GoogleIcon />}
            >
              Sing up with Google
            </MyButton>
            <MyButton
              size='mediumWithIcon'
              variant='outlined'
              startIcon={<GitHubIcon />}
            >
              Sing up with GitHub
            </MyButton>
          </div>
          <div className={styles.divider}>
            <div className={styles.line}></div>
            <div>Or</div>
            <div className={styles.line}></div>
          </div>
          <MyInput label='E-mail' name='email' onChange={handleChange} />
          <MyInput label='Пароль' name='password' onChange={handleChange} />
          <MyCheckbox label='Запомнить меня' />
          <MyButton
            size='large'
            variant='contained'
            onClick={handleLogin}
            // disabled
          >
            Войти
          </MyButton>
          <div className={styles.create_account}>
            <span>Нет аккаунта?</span>
            <span
              className={styles.creator}
              onClick={() => navigate(`/registration/`)}
            >
              Создать аккаунт
            </span>
          </div>
        </div>
      </div>

      <div className={styles.right_side}>
        <div className={styles.logo}>
          <p className={styles.logo__text_bold}>justice</p>
          <p className={styles.logo__text}>finance</p>
        </div>
        <div className={styles.images}>
          <img alt='loginImage' width='500' height='500' src={loginImage} />
        </div>
      </div>
    </div>
  )
}

export default LoginPage
