import React, { useEffect, useState } from 'react'

import { MyButton } from '../../components/MyUI/MyButton'
import { MyInput } from '../../components/MyUI/MyInput'
import { MyCheckbox } from '../../components/MyUI/MyCheckbox'

import { useNavigate } from 'react-router-dom'

import styles from '../RegistrationPage/styles.module.scss'

import registrationImage from '../../assets/images/registration.png'
import { ReactComponent as GoogleIcon } from '../../assets/icons/googleIcon.svg'
import { ReactComponent as GitHubIcon } from '../../assets/icons/githubIcon.svg'
import { useDispatch } from 'react-redux'
import { getNewUser, getUser } from '../../redux/actions/authAction'

const allUsers = JSON.parse(localStorage.getItem('allUsers')) || []
// console.log('===>allUsers', allUsers)

const USER_REGEX = /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']{2}$/
const PWD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const RegistrationPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [validName, setValidName] = useState(false)
  const [validEmail, setValidEmail] = useState(false)
  const [validPwd, setValidPwd] = useState(false)
  const [validMatch, setValidMatch] = useState(false)

  const [form, setForm] = useState({
    // id: '',
    fullName: '',
    email: '',
    password: '',
    MatchPassword: '',
    wallets: [],
  })

  const [checked, setChecked] = useState(false)
  const handleCheck = (event) => {
    setChecked(event.target.checked)
  }

  useEffect(() => {
    const result = USER_REGEX.test(form.fullName)
    setValidName(result)
  }, [form.fullName])

  useEffect(() => {
    const result = EMAIL_REGEX.test(form.email)
    setValidEmail(result)
  }, [form.email])

  useEffect(() => {
    const result = PWD_REGEX.test(form.password)
    setValidPwd(result)
    const match = form.password === form.MatchPassword
    setValidMatch(match)
  }, [form.password, form.MatchPassword])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  console.log('=>form-registerPage', form)

  const handleClick = async () => {
    // console.log('=>form-handleRegister', form)
    const user = await dispatch(getNewUser(form))
    // console.log('=>dispatch-handleRegister', user)

    if (user.token) {
      localStorage.setItem('authorized', user.token)
    }
    // form.id = Date.now()
    // allUsers.push(form)
    // localStorage.setItem('allUsers', JSON.stringify(allUsers))
    // alert('Registration successfully')
    // navigate(`/login`, { replace: true })
  }

  return (
    <div className={styles.login}>
      <div className={styles.left_side}>
        <div className={styles.left_side__container}>
          <h1 className={styles.left_side__title}>Регистрация</h1>
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

          <MyInput
            error={!(!form.fullName || validName)}
            helperText={
              !form.fullName || validName
                ? ''
                : 'Min 4 symbols. Must include only english letters'
            }
            label='Имя'
            name='fullName'
            onChange={handleChange}
          />
          <MyInput
            error={!(!form.email || validEmail)}
            helperText={
              !form.email || validEmail
                ? ''
                : 'May include letters, numbers. Must include characters . and @'
            }
            label='E-mail'
            name='email'
            onChange={handleChange}
          />
          <div className={styles.password}>
            <MyInput
              error={!(!form.password || validPwd)}
              helperText={
                !form.password || validPwd
                  ? ''
                  : 'Min 8 symbols. Must include uppercase, lowercase letters and numbers'
              }
              label='Пароль'
              name='password'
              onChange={handleChange}
            />
            <MyInput
              error={!(!form.MatchPassword || validMatch)}
              helperText={
                !form.MatchPassword || validMatch ? '' : ' Passwords must match'
              }
              label='Подтвердите пароль'
              name='MatchPassword'
              onChange={handleChange}
            />
          </div>

          <MyCheckbox
            checked={checked}
            onChange={handleCheck}
            required
            sx={{
              '& .MuiTypography-root': {
                fontSize: '32px',
              },
            }}
            label='I accept the Terms of Service and have read Private Policy'
          />

          <MyButton
            type='submit'
            size='large'
            variant='contained'
            disabled={
              !validName || !validEmail || !validPwd || !validMatch || !checked
            }
            onClick={handleClick}
          >
            Зарегистрироваться
          </MyButton>

          <div className={styles.create_account}>
            <span>У вас уже есть учетная запись?</span>
            <span
              className={styles.creator}
              onClick={() => navigate(`/login/`)}
            >
              Авторизоваться
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
          <img
            alt='registrationImage'
            width='500'
            height='500'
            src={registrationImage}
          />
        </div>
      </div>
    </div>
  )
}

export default RegistrationPage
