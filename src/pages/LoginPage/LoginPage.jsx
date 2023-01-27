import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { validationSchemaLogin } from '../../data/validation'

import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { MyButton } from '../../components/MyUI/MyButton'
import { MyInput, PasswordInput } from '../../components/MyUI/MyInput'

import { MyCheckbox } from '../../components/MyUI/MyCheckbox'
import { getUser } from '../../redux/actions/authAction'

import styles from '../LoginPage/styles.module.scss'

import loginImage from '../../assets/images/login.png'
import { ReactComponent as GoogleIcon } from '../../assets/icons/googleIcon.svg'
import { ReactComponent as GitHubIcon } from '../../assets/icons/githubIcon.svg'
import { ToastContainer } from 'react-toastify'

const LoginPage = () => {
  const validationsSchema = yup.object().shape({ ...validationSchemaLogin })
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = async (values) => {
    await dispatch(getUser(values))
  }

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
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={validationsSchema}
            onSubmit={handleSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isValid,
              dirty,
            }) => (
              <>
                <MyInput
                  value={values.email}
                  label='E-mail'
                  name='email'
                  error={errors.email && touched.email}
                  helperText={errors.email && touched.email ? errors.email : ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={{
                    maxWidth: 420,
                    '& .MuiInputBase-root': {
                      borderRadius: 0,
                    },
                  }}
                />

                <PasswordInput
                  value={values.password}
                  label='Пароль'
                  name='password'
                  error={errors.password && touched.password}
                  helperText={
                    errors.password && touched.password ? errors.password : ''
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={{
                    maxWidth: 420,
                    '& .MuiInputBase-root': {
                      borderRadius: 0,
                    },
                  }}
                />
                <MyCheckbox label='Запомнить меня' />
                <MyButton
                  size='large'
                  variant='contained'
                  onClick={handleSubmit}
                  disabled={!isValid || !dirty}
                >
                  Войти
                </MyButton>
              </>
            )}
          </Formik>

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
      <ToastContainer limit={10} />
    </div>
  )
}

export default LoginPage
