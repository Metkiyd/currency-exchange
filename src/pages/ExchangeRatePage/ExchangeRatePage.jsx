import React from 'react';
import styles from "../ExchangeRatePage/styles.module.scss";
import {MyButton} from "../../components/MyUI/MyButton";
import {MySearch} from "../../components/MyUI/MySearch";
import {SlickSlider1} from "../../components/MyUI/SlickSlider1";
import {MyChart} from "../../components/MyUI/MyChart";
import {ReactComponent as PositiveArrowIcon} from '../../assets/icons/positiveArrowIcon.svg';
import {NavSidebar} from "../../components/NavSidebar";
import {ProfileSidebar} from "../../components/ProfileSidebar";

const ExchangeRatePage = () => {
  return (
    <div className={styles.page_layout}>
      <NavSidebar/>
      <section className={styles.main_container}>
          <div className={styles.header__nav}>
            <p className={styles.header__title}>Курсы валют</p>
            <div className={styles.header__search_wrapper}>
              <MySearch fullWidth/>
            </div>
          </div>
          <SlickSlider1/>
          <div className={styles.currency}>
            <div>
              <p className={styles.currency__title}>
                USD / RUB • CURRENCY
              </p>
              <p className={styles.currency__subtitle}>
                US Dollar/Russian Ruble</p>
            </div>
            <MyButton variant="contained">Обменять</MyButton>
          </div>
          <div className={styles.result}>
            <div className={styles.result__nums}>
              <span className={styles.result__num_title}>83,8750</span>
              <div className={styles.result__num_percent}>
                <PositiveArrowIcon/>
                <span>
                0,45 %</span>
              </div>
              <span className={styles.result__num_today}>+0,3750 Today</span>
            </div>
            <div>
              <p className={styles.result__date}>12 Apr., 12:28:25 UTC</p>
            </div>
          </div>
          <MyChart/>

      </section>
      <ProfileSidebar/>
    </div>
  );
};

export default ExchangeRatePage;