import React from 'react';
import {NavSidebar} from "../../components/NavSidebar";
import {ProfileSidebar} from "../../components/ProfileSidebar";
import styles from "../ProfilePage/styles.module.scss";

import {MyButton} from "../../components/MyUI/MyButton";
import {MyInput} from "../../components/MyUI/MyInput";

const ProfilePage = () => {
  return (
    <div className={styles.page_layout}>
      <NavSidebar/>
      <section className={styles.main}>
        <div className={styles.main__nav}>
          <p className={styles.main__title}>Мой профиль</p>
          <MyButton variant="contained" disabled>Сохранить изменения</MyButton>
        </div>
        <div className={styles.profile_info}>
          <p className={styles.profile_title}>Информация о вашей учетной записи</p>

          <div className={styles.profile_inputs}>
            <MyInput label="Имя" sx={{width: 388}}/>
            <MyInput label="E-mail" sx={{width: 388}}/>
            <MyInput label="Город" sx={{width: 388}}/>
            <MyInput label="Дата рождения" sx={{width: 388}}/>
            <MyInput label="Номер телефона" sx={{width: 388}}/>
          </div>


        </div>
        <div className={styles.password_info}>
          <p className={styles.profile_title}>Пароль</p>
          <div className={styles.password_inputs}>
            <MyInput label="Введите старый пароль" sx={{width: 388}}/>
            <MyInput label="Повторите новый пароль" sx={{width: 388}}/>
            <MyInput label="Введите новый пароль" sx={{width: 388}}/>
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