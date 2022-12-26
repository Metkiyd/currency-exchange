import React, {useEffect, useState} from 'react';
import {NavSidebar} from "../../components/NavSidebar";
import {ProfileSidebar} from "../../components/ProfileSidebar";
import styles from "../ProfilePage/styles.module.scss";

import {MyButton} from "../../components/MyUI/MyButton";
import {MyInput} from "../../components/MyUI/MyInput";

const allUsers = JSON.parse(localStorage.getItem("allUsers"))
// console.log('===>AllUsers', allUsers)

const authorized = JSON.parse(localStorage.getItem("authorized"))
// console.log('===>authorized', authorized)


const ProfilePage = () => {


  const loggedUser = allUsers.find(user => authorized === user.id) || null
  console.log('===>loggedUser', loggedUser)

  const [users, setUsers] = useState(allUsers)
  // console.log('===>users', users)

  const [form, setForm] = useState(loggedUser)
  
  // console.log('===>form1', form)
  
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }



  const handleClick = () => {

    setUsers(users.map(user => {
      if (user.id === authorized) {
        return {
          ...user,
          ...form
        }
      }

      return user
    }))

  }

  useEffect(() => {
    localStorage.setItem("allUsers", JSON.stringify(users))
  }, [users])




  return (
    <div className={styles.page_layout}>
      <NavSidebar/>
      <section className={styles.main}>
        <div className={styles.main__nav}>
          <p className={styles.main__title}>Мой профиль</p>
          <MyButton
            variant="contained"
            onClick={handleClick}
            // disabled
          >Сохранить изменения</MyButton>
        </div>
        <div className={styles.profile_info}>
          <p className={styles.profile_title}>Информация о вашей учетной записи</p>

          <div className={styles.profile_inputs}>
            <MyInput
              defaultValue={loggedUser.Name}
  
              label="Имя"
              name="Name"
              sx={{width: 388}}
              onChange={handleChange}
            />
            <MyInput
              defaultValue={loggedUser.Email}
              label="E-mail"
              name="Email"
              sx={{width: 388}}
              onChange={handleChange}
            />
            <MyInput
              label="Город"
              defaultValue={loggedUser.City}
              sx={{width: 388}}
              name="City"
              onChange={handleChange}
            />
            <MyInput
              label="Дата рождения"
              defaultValue={loggedUser.Birthday}
              sx={{width: 388}}
              name="Birthday"
              onChange={handleChange}
            />
            <MyInput
              label="Номер телефона"
              defaultValue={loggedUser.Phone}
              sx={{width: 388}}
              name="Phone"
              onChange={handleChange}
            />
          </div>


        </div>
        <div className={styles.password_info}>
          <p className={styles.profile_title}>Пароль</p>
          <div className={styles.password_inputs}>
            <MyInput
              label="Введите старый пароль"
              sx={{width: 388}}
            />
            <MyInput
              label="Введите новый пароль"
              sx={{width: 388}}
            />
            <MyInput
              label="Повторите новый пароль"
              sx={{width: 388}}
            />
            <MyButton
              size="large"
              variant="contained"
              disabled
            >Изменить пароль
            </MyButton>
          </div>
        </div>
      </section>
      <ProfileSidebar/>
    </div>
  );
};

export default ProfilePage;