import React, { useEffect, useState } from 'react'
import { NavSidebar } from '../../components/NavSidebar'
import { ProfileSidebar } from '../../components/ProfileSidebar'
import { MyButton } from '../../components/MyUI/MyButton'

import { MyInput } from '../../components/MyUI/MyInput'
import { useDispatch, useSelector } from 'react-redux'
import axiosBack from '../../api/axiosBack'
import { getAuthUser } from '../../redux/actions/authAction'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import styles from '../ProfilePage/styles.module.scss'
import * as yup from 'yup'
import { validationSchema, validationSchemaLogin } from '../../data/validation'
import { MyCheckbox } from '../../components/MyUI/MyCheckbox'
import { Formik } from 'formik'

const ProfilePage = () => {
  const validationsSchema = yup.object().shape({ ...validationSchema })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const User = useSelector((state) => state.user.user)
  // console.log('=>User-profile', User)

  // const [form, setForm] = useState(User)
  // console.log('=>form-profile', form)

  // const handleChange = (e) => {
  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.value,
  //   })
  // }

  const handleClick = async () => {
    // await console.log('=>form-profile-bef-click', form)
    // await axiosBack.patch('/auth/update', form)
    // await console.log('=>form-profile-aft-click', form)
    // await dispatch(getAuthUser())
  }
  const handleSubmit = (values) => {
    console.log('=>values', values)
    // toast.error('error')
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
              initialValues={{
                email: '',
                // password: '',
              }}
              validationSchema={validationsSchema}
              onSubmit={handleSubmit}
              // enableReinitialize
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
                    helperText={
                      errors.email && touched.email ? errors.email : ''
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <MyButton
                    variant='contained'
                    onClick={handleSubmit}
                    disabled={
                      // !isValid
                      // ||
                      !dirty
                    }
                  >
                    Сохранить изменения
                  </MyButton>

                  {/*<MyInput*/}
                  {/*  value={values.password}*/}
                  {/*  label='Пароль'*/}
                  {/*  name='password'*/}
                  {/*  error={errors.password && touched.password}*/}
                  {/*  helperText={*/}
                  {/*    errors.password && touched.password ? errors.password : ''*/}
                  {/*  }*/}
                  {/*  onChange={handleChange}*/}
                  {/*  onBlur={handleBlur}*/}
                  {/*  sx={{*/}
                  {/*    maxWidth: 420,*/}
                  {/*    '& .MuiInputBase-root': {*/}
                  {/*      borderRadius: 0,*/}
                  {/*    },*/}
                  {/*  }}*/}
                  {/*/>*/}
                </>
              )}
            </Formik>

            {/*<MyInput*/}
            {/*  defaultValue={User.fullName}*/}
            {/*  label='Имя'*/}
            {/*  name='fullName'*/}
            {/*  onChange={handleChange}*/}
            {/*/>*/}
            {/*<MyInput*/}
            {/*  defaultValue={User.email}*/}
            {/*  label='E-mail'*/}
            {/*  name='email'*/}
            {/*  onChange={handleChange}*/}
            {/*/>*/}
            {/*<MyInput*/}
            {/*  label='Город'*/}
            {/*  defaultValue={User.city}*/}
            {/*  name='city'*/}
            {/*  onChange={handleChange}*/}
            {/*/>*/}
            {/*<MyInput*/}
            {/*  label='Дата рождения'*/}
            {/*  defaultValue={User.birthday}*/}
            {/*  name='birthday'*/}
            {/*  onChange={handleChange}*/}
            {/*/>*/}
            {/*<MyInput*/}
            {/*  label='Номер телефона'*/}
            {/*  defaultValue={User.phone}*/}
            {/*  name='phone'*/}
            {/*  onChange={handleChange}*/}
            {/*/>*/}
          </div>
        </div>
        <div className={styles.password_info}>
          <p className={styles.profile_title}>Пароль</p>
          <div className={styles.password_inputs}>
            <MyInput label='Введите старый пароль' />
            <MyInput label='Введите новый пароль' />
            <MyInput label='Повторите новый пароль' />
            {/*<MyButton*/}
            {/*  onClick={handleSubmit}*/}
            {/*  size='large'*/}
            {/*  variant='contained'*/}
            {/*  // disabled*/}
            {/*>*/}
            {/*  Изменить пароль*/}
            {/*</MyButton>*/}
            <ToastContainer limit={10} />
            {/*<MyError />*/}
          </div>
        </div>
      </section>
      <ProfileSidebar />
    </div>
  )
}

export default ProfilePage
