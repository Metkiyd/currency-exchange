import React, { useEffect, useState } from 'react'

import { MyButton } from '../../components/MyUI/MyButton'
import { MyInput, PasswordInput } from '../../components/MyUI/MyInput'
import { MyCheckbox } from '../../components/MyUI/MyCheckbox'

import { useNavigate } from 'react-router-dom'

import styles from '../RegistrationPage/styles.module.scss'

import registrationImage from '../../assets/images/registration.png'
import { ReactComponent as GoogleIcon } from '../../assets/icons/googleIcon.svg'
import { ReactComponent as GitHubIcon } from '../../assets/icons/githubIcon.svg'
import { useDispatch } from 'react-redux'
import { getNewUser } from '../../redux/actions/authAction'

const USER_REGEX = /^[a-zа-яё\s]{3,}$/iu
const PWD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const RegistrationPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [validName, setValidName] = useState(false)
  const [validEmail, setValidEmail] = useState(false)
  const [validPwd, setValidPwd] = useState(false)
  const [validMatch, setValidMatch] = useState(false)
  const [checked, setChecked] = useState(false)

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    MatchPassword: '',
    wallets: [],
  })

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

  // console.log('=>form-registerPage', form)
  const handleCheck = (event) => {
    setChecked(event.target.checked)
  }

  const handleClick = async () => {
    // console.log('=>form-handleRegister', form)
    const user = await dispatch(getNewUser(form))
    // console.log('=>dispatch-handleRegister', user)
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
            sx={{
              maxWidth: 420,
              '& .MuiInputBase-root': {
                borderRadius: 0,
              },
            }}
            error={!(!form.fullName || validName)}
            helperText={
              !form.fullName || validName
                ? ''
                : 'Минимум 3 символа. Только буквы'
            }
            label='Имя'
            name='fullName'
            onChange={handleChange}
          />
          <MyInput
            sx={{
              maxWidth: 420,
              '& .MuiInputBase-root': {
                borderRadius: 0,
              },
            }}
            error={!(!form.email || validEmail)}
            helperText={
              !form.email || validEmail ? '' : 'Введен некорректный email'
            }
            label='E-mail'
            name='email'
            onChange={handleChange}
          />
          <div className={styles.password}>
            <PasswordInput
              error={!(!form.password || validPwd)}
              helperText={
                !form.password || validPwd
                  ? ''
                  : 'Пароль должен содержать англ заглавные и строчные буквы, цифры. Минимум 6 символов'
              }
              label='Пароль'
              name='password'
              onChange={handleChange}
            />
            <PasswordInput
              error={!(!form.MatchPassword || validMatch)}
              helperText={
                !form.MatchPassword || validMatch
                  ? ''
                  : ' Пароли должны совпадать'
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
