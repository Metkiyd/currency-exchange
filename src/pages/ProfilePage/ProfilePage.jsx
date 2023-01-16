import React, { useEffect, useState } from 'react'
import { NavSidebar } from '../../components/NavSidebar'
import { ProfileSidebar } from '../../components/ProfileSidebar'
import styles from '../ProfilePage/styles.module.scss'

import { MyButton } from '../../components/MyUI/MyButton'
import { MyInput } from '../../components/MyUI/MyInput'
import { useDispatch, useSelector } from 'react-redux'
import axiosBack from '../../api/axiosBack'
import { getAuthUser } from '../../redux/actions/authAction'

const ProfilePage = () => {
  const dispatch = useDispatch()
  const User = useSelector((state) => state.user.user)
  // console.log('=>User-State', User)

  const [form, setForm] = useState(User)

  console.log('=>User-form', form)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleClick = async () => {
    await axiosBack.patch('/auth/update', form)
    await dispatch(getAuthUser())
  }

  return (
    <div className={styles.page_layout}>
      <NavSidebar />
      <section className={styles.main}>
        <div className={styles.main__nav}>
          <p className={styles.main__title}>Мой профиль</p>
          <MyButton
            variant='contained'
            onClick={handleClick}
            // disabled
          >
            Сохранить изменения
          </MyButton>
        </div>
        <div className={styles.profile_info}>
          <p className={styles.profile_title}>
            Информация о вашей учетной записи
          </p>

          <div className={styles.profile_inputs}>
            <MyInput
              defaultValue={User.fullName}
              label='Имя'
              name='fullName'
              sx={{ width: 388 }}
              onChange={handleChange}
            />
            <MyInput
              defaultValue={User.email}
              label='E-mail'
              name='email'
              sx={{ width: 388 }}
              onChange={handleChange}
            />
            <MyInput
              label='Город'
              defaultValue={User.city}
              sx={{ width: 388 }}
              name='city'
              onChange={handleChange}
            />
            <MyInput
              label='Дата рождения'
              defaultValue={User.birthday}
              sx={{ width: 388 }}
              name='birthday'
              onChange={handleChange}
            />
            <MyInput
              label='Номер телефона'
              defaultValue={User.phone}
              sx={{ width: 388 }}
              name='phone'
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.password_info}>
          <p className={styles.profile_title}>Пароль</p>
          <div className={styles.password_inputs}>
            <MyInput label='Введите старый пароль' sx={{ width: 388 }} />
            <MyInput label='Введите новый пароль' sx={{ width: 388 }} />
            <MyInput label='Повторите новый пароль' sx={{ width: 388 }} />
            <MyButton size='large' variant='contained' disabled>
              Изменить пароль
            </MyButton>
          </div>
        </div>
      </section>
      <ProfileSidebar />
    </div>
  )
}

export default ProfilePage
