import React, {useEffect, useState} from 'react';
import styles from "../RegistrationPage/styles.module.scss";

import {MyButton} from "../../components/MyUI/MyButton";
import {useNavigate} from "react-router-dom";
import {MyInput} from "../../components/MyUI/MyInput";
import {MyCheckbox} from "../../components/MyUI/MyCheckbox";
import registrationImage from '../../assets/images/registration.png'
import {ReactComponent as GoogleIcon} from '../../assets/icons/googleIcon.svg';
import {ReactComponent as GitHubIcon} from '../../assets/icons/githubIcon.svg';

const users = JSON.parse(localStorage.getItem('Users')) || []
// console.log('===>users', users)

const USER_REGEX = /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']{3}$/;
const PWD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


const RegistrationPage = () => {
  const navigate = useNavigate();

  const [validName, setValidName] = useState(false)
  const [validPwd, setValidPwd] = useState(false)
  const [validEmail, setValidEmail] = useState(false)
  const [validMatch, setValidMatch] = useState(false)


  const [form, setForm] = useState({
    Name: '',
    Email: '',
    Password: '',
    MatchPassword: ''
  })

  useEffect(() => {
    const result = USER_REGEX.test(form.Name);
    setValidName(result);

  }, [form.Name])

  useEffect(() => {
    const result = PWD_REGEX.test(form.Password);
    setValidPwd(result);
    const match = form.Password === form.MatchPassword;
    setValidMatch(match);

  }, [form.Password, form.MatchPassword])

  useEffect(() => {
    const result = EMAIL_REGEX.test(form.Email);
    setValidEmail(result);

  }, [form.Email])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = (e) => {

    alert('Registration successfully')
    navigate(`/login`)
    users.push(form)
    localStorage.setItem("Users", JSON.stringify(users))
  }


  const [checked, setChecked] = React.useState(false);

  const handleCheck = (event) => {
    setChecked(event.target.checked);
  };


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
              error={!(!form.Name || validName)}
              helperText={!form.Name || validName ? '' : "Min 5, only letters"}
              label="Имя"
              name="Name"
              onChange={handleChange}
            />
            <MyInput
              error={!(!form.Email || validEmail)}
              helperText={!form.Email || validEmail ? '' : "Must include uppercase, lowercase letters, characters . and @"}
              label="E-mail"
              name="Email"
              onChange={handleChange}
            />
            <div className={styles.password}>
              <MyInput
                error={!(!form.Password || validPwd)}
                helperText={!form.Password || validPwd ? '' : "Min 8, must include uppercase, lowercase letters and number"}
                label="Пароль"
                name="Password"
                onChange={handleChange}
              />
              <MyInput
                error={!(!form.MatchPassword || validMatch)}
                helperText={!form.MatchPassword || validMatch ? '' : " Passwords must match"}

                label="Подтвердите пароль"
                name="MatchPassword"
                onChange={handleChange}
              />
            </div>

            <MyCheckbox
              checked={checked} onChange={handleCheck}
              required
              sx={{
                "& .MuiTypography-root": {
                  fontSize: '32px'
                }
              }}
              label="I accept the Terms of Service and have read Private Policy"/>

            <MyButton
              type="submit"
              size="large"
              variant="contained"
              disabled={(!validName || !validEmail || !validPwd || !validMatch || !checked)}
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


