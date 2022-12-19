import React from 'react';
import styles from "../LoginPage/styles.module.scss";
import {MyButton} from "../../components/MyUI/MyButton";
import {useNavigate} from "react-router-dom";
import {MyInput} from "../../components/MyUI/MyInput";
import {MyCheckbox} from "../../components/MyUI/MyCheckbox";
import loginImage from '../../assets/images/login.png'
import { ReactComponent as GoogleIcon } from '../../assets/icons/googleIcon.svg';
import { ReactComponent as GitHubIcon } from '../../assets/icons/githubIcon.svg';

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.login}>
      <div className={styles.left_side}>
        <div className={styles.left_side__container}>
          <h1 className={styles.left_side__title}>Вход</h1>
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
          <MyInput label="E-mail"/>
          <MyInput label="Пароль"/>

          <MyCheckbox label="Запомнить меня"/>
          <MyButton size="large" variant="contained" disabled>Войти</MyButton>
          <div className={styles.create_account}>
          <span>
            Нет аккаунта?
          </span>
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
          <p className={styles.logo__text_bold}>
            justice
          </p>
          <p className={styles.logo__text}>
            finance
          </p>
        </div>
        <div className={styles.images}>
          <img
            alt="loginImage"
            width="500"
            height="500"
            src={loginImage}
          />

        </div>

      </div>
    </div>
  );
};

export default LoginPage;


