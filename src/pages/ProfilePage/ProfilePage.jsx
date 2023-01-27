import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Formik } from 'formik'
import * as yup from 'yup'
import { toast, ToastContainer } from 'react-toastify'

import { ProfileSidebar } from '../../components/ProfileSidebar'
import { NavSidebar } from '../../components/NavSidebar'
import { MyButton } from '../../components/MyUI/MyButton'
import { MyInput } from '../../components/MyUI/MyInput'
import PasswordInput from '../../components/MyUI/MyInput/PasswordInput'
// import { MyCheckbox } from '../../components/MyUI/MyCheckbox'

import { getAuthUser } from '../../redux/actions/authAction'
import {
  validationChangePwd,
  validationSchemaProfile,
} from '../../data/validation'
import styles from '../ProfilePage/styles.module.scss'

const ProfilePage = () => {
  const validationsSchema = yup.object().shape({ ...validationSchemaProfile })
  const validationsSchemaPwd = yup.object().shape({ ...validationChangePwd })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const User = useSelector((state) => state.user.user)

  const handleSubmit = async (values) => {
    try {
      await console.log('=>values', values)
      // await axiosBack.patch('/auth/update', values)
      // await dispatch(getAuthUser())
    } catch (e) {
      toast.error(e.response?.data?.message)
    }
  }

  return (
    <div className={styles.page_layout}>
      <NavSidebar />
      <section className={styles.main}>
        <div className={styles.main__nav}>
          <p className={styles.main__title}>Мой профиль</p>
          {/*<MyButton*/}
          {/*  variant='contained'*/}
          {/*  onClick={handleClickin}*/}
          {/*  // onClick={handleSubmit}*/}
          {/*  // disabled={!isValid || !dirty}*/}
          {/*  // disabled*/}
          {/*>*/}
          {/*  Сохранить изменения*/}
          {/*</MyButton>*/}
        </div>
        <div className={styles.profile_info}>
          <p className={styles.profile_title}>
            Информация о вашей учетной записи
          </p>

          <div className={styles.profile_inputs}>
            <Formik
              enableReinitialize
              initialValues={{
                fullName: User.fullName,
                email: User.email,
                city: User.city,
                birthday: User.birthday,
                phone: User.phone,
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
                    value={values.fullName}
                    label='Имя'
                    name='fullName'
                    error={errors.fullName && touched.fullName}
                    helperText={
                      errors.fullName && touched.fullName ? errors.fullName : ''
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <MyInput
                    value={values.email}
                    label='E-mail'
                    name='email'
                    error={errors.email && touched.email}
                    helperText={
                      errors.email && touched.email ? errors.email : ''
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <MyInput
                    value={values.city}
                    label='Город'
                    name='city'
                    error={errors.city && touched.city}
                    helperText={errors.city && touched.city ? errors.city : ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <MyInput
                    value={values.birthday}
                    label='Дата рождения'
                    name='birthday'
                    error={errors.birthday && touched.birthday}
                    helperText={
                      errors.birthday && touched.birthday ? errors.birthday : ''
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <MyInput
                    value={values.phone}
                    label='Номер телефона'
                    name='phone'
                    error={errors.phone && touched.phone}
                    helperText={
                      errors.phone && touched.phone ? errors.phone : ''
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <MyButton
                    size='large'
                    variant='contained'
                    onClick={handleSubmit}
                    disabled={!isValid || !dirty}
                  >
                    Сохранить изменения
                  </MyButton>
                </>
              )}
            </Formik>
          </div>
        </div>
        <div className={styles.password_info}>
          <p className={styles.profile_title}>Пароль</p>
          <div className={styles.password_inputs}>
            <Formik
              enableReinitialize
              initialValues={{
                oldPassword: '',
                password: '',
                confirmPassword: '',
              }}
              validationSchema={validationsSchemaPwd}
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
                  <PasswordInput
                    value={values.oldPassword}
                    label='Введите старый пароль'
                    name='oldPassword'
                    error={errors.oldPassword && touched.oldPassword}
                    helperText={
                      errors.oldPassword && touched.oldPassword
                        ? errors.oldPassword
                        : ''
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <PasswordInput
                    value={values.password}
                    label='Введите новый пароль'
                    name='password'
                    error={errors.password && touched.password}
                    helperText={
                      errors.password && touched.password ? errors.password : ''
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <PasswordInput
                    value={values.confirmPassword}
                    label='Повторите новый пароль'
                    name='confirmPassword'
                    error={errors.confirmPassword && touched.confirmPassword}
                    helperText={
                      errors.confirmPassword && touched.confirmPassword
                        ? errors.confirmPassword
                        : ''
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <MyButton
                    size='large'
                    variant='contained'
                    onClick={handleSubmit}
                    disabled={!isValid || !dirty}
                  >
                    Изменить пароль
                  </MyButton>
                </>
              )}
            </Formik>
            <ToastContainer limit={10} />
          </div>
        </div>
      </section>
      <ProfileSidebar />
    </div>
  )
}

export default ProfilePage
