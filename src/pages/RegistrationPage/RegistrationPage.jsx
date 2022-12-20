import React, {useState} from 'react';
import styles from "../RegistrationPage/styles.module.scss";

import {MyButton} from "../../components/MyUI/MyButton";
import {useNavigate} from "react-router-dom";
import {MyInput} from "../../components/MyUI/MyInput";
import {MyCheckbox} from "../../components/MyUI/MyCheckbox";
import registrationImage from '../../assets/images/registration.png'
import {ReactComponent as GoogleIcon} from '../../assets/icons/googleIcon.svg';
import {ReactComponent as GitHubIcon} from '../../assets/icons/githubIcon.svg';

const users = JSON.parse(localStorage.getItem('Users'))  || []
console.log('===>users', users)

const RegistrationPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    Name: '',
    Email: '',
    Password: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  
  const handleClick = (e) => {


    alert('Registration succesfull')
    navigate(`/login`)
    users.push(form)
    localStorage.setItem("Users", JSON.stringify(users))
  }




  return (
    <div className={styles.login}>
      <div className={styles.left_side}>
        <div className={styles.left_side__container}>
          <h1 className={styles.left_side__title}>Регистрация</h1>
          <div className={styles.form__sing_up}>
            <MyButton
              size="mediumWithIcon"
              variant="outlined"
              startIcon={
                <GoogleIcon/>
              }
            >
              Sing up with Google
            </MyButton>
            <MyButton
              size="mediumWithIcon"
              variant="outlined"
              startIcon={
                <GitHubIcon/>

              }
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
            label="Имя"
            name="Name"
            onChange={handleChange}
          />
          <MyInput
            label="E-mail"
            name="Email"
            onChange={handleChange}
          />
          <div className={styles.password}>
            <MyInput
              label="Пароль"
              name="Password"
              onChange={handleChange}
            />
            <MyInput
              label="Подтвердите пароль"
            />
          </div>

          <MyCheckbox sx={{

            "& .MuiTypography-root": {
              fontSize: '32px'
            }

          }} label="I accept the Terms of Service and have read Private Policy"/>
          <MyButton
            size="large"
            variant="contained"
            // disabled
            onClick={handleClick}
          >
            Зарегистрироваться
          </MyButton>
          <div className={styles.create_account}>
          <span>
            У вас уже есть учетная запись?
          </span>
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
          <p className={styles.logo__text_bold}>
            justice
          </p>
          <p className={styles.logo__text}>
            finance
          </p>
        </div>
        <div className={styles.images}>
          <img
            alt="registrationImage"
            width="500"
            height="500"
            src={registrationImage}
          />

        </div>

      </div>
    </div>
  );
};

export default RegistrationPage;


