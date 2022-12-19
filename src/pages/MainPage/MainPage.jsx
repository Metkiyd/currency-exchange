import React from 'react';
import {MyButton} from "../../components/MyUI/MyButton";
import {useNavigate} from "react-router-dom";
import styles from './styles.module.scss'
import backgroundImage from '../../assets/images/background.png'
import exampleImage from '../../assets/images/mainPageExample.png'
import exampleCurrency from '../../assets/images/currencyExample.png'
import { ReactComponent as StarSmall } from '../../assets/icons/starSmall.svg';
import { ReactComponent as StarBig } from '../../assets/icons/starBig.svg';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <img
        className={styles.backgroundImage}
        alt="backgroundImage"
        width="1440"
        height="900"
        src={backgroundImage}
      />
      <header className={styles.header}>
        <div className={styles.header__nav}>
          <div className={styles.header__logo}>
            <p className={styles.header__logo__text_bold}>
              justice
            </p>
            <p className={styles.header__logo__text}>
              finance
            </p>
          </div>
          <div className={styles.header__btn_container}>
            <MyButton
              variant="contained"
              onClick={() => navigate(`/login/`)}
            >Войти</MyButton>
          </div>
        </div>
      </header>
      <section className={styles.main}>
        <h1 className={styles.main__title}>
          Обменивайте валюту<br/>
          по выгодному курсу
        </h1>
        <div className={styles.main__example_image}>
          <img

            alt="exampleImage"
            width="1008"
            height="457"
            src={exampleImage}
          />
          <div className={styles.main__elements}>
            <img
              className={styles.main__example_currency}
              alt="exampleCurrency"
              width="224"
              height="64"
              src={exampleCurrency}
            />
            <div className={styles.main__star_small}>
              <StarSmall/>
            </div>
            <div className={styles.main__star_big}>
              <StarBig/>
            </div>
            <div className={styles.main__circle_small}></div>
            <div className={styles.main__circle_big}></div>
          </div>
        </div>


      </section>
    </div>
  );
};

export default MainPage;