import React, {useState} from 'react';
import {NavSidebar} from "../../components/NavSidebar";
import {ProfileSidebar} from "../../components/ProfileSidebar";
import styles from "../ProfilePage/styles.module.scss";

import {MyButton} from "../../components/MyUI/MyButton";
import {MyInput} from "../../components/MyUI/MyInput";

const users = JSON.parse(localStorage.getItem("Users"))
console.log('===>users2', users)

const ProfilePage = () => {


  const [form, setForm] = useState(users)
  
  console.log('===>form1', form)
  
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const currentUser = JSON.parse(localStorage.getItem("currentUser"))
  // const currentUser = loggedUser.find(user => user.Email)
  console.log('===>currentUser', currentUser)

  const handleClick = () => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser))
  }




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
              defaultValue={currentUser.Name}
  
              label="Имя"
              name="Name"
              sx={{width: 388}}
              onChange={handleChange}
            />
            <MyInput
              defaultValue={currentUser.Email}
              label="E-mail"
              name="Email"
              sx={{width: 388}}
              onChange={handleChange}
            />
            <MyInput
              label="Город"
              defaultValue={currentUser.City}
              sx={{width: 388}}
              name="City"
              onChange={handleChange}
            />
            <MyInput
              label="Дата рождения"
              defaultValue={currentUser.Birthday}
              sx={{width: 388}}
              name="Birthday"
              onChange={handleChange}
            />
            <MyInput
              label="Номер телефона"
              defaultValue={currentUser.Phone}
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
              label="Повторите новый пароль"
              sx={{width: 388}}
            />
            <MyInput
              label="Введите новый пароль"
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