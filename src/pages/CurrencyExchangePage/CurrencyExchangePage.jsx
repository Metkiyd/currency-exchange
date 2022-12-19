import React from 'react';
import {NavSidebar} from "../../components/NavSidebar";
import {ProfileSidebar} from "../../components/ProfileSidebar";
import styles from "../CurrencyExchangePage/styles.module.scss";
import {MyInput} from "../../components/MyUI/MyInput";
import {MySelector} from "../../components/MyUI/MySelector";
import {MyButton} from "../../components/MyUI/MyButton";
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';

const CurrencyExchangePage = () => {
  return (
    <div className={styles.page_layout}>
      <NavSidebar/>
      <section className={styles.main}>
        <div className={styles.main__nav}>
          <p className={styles.main__title}>Обмен валют</p>
        </div>
        <div className={styles.profile_info}>
          <p className={styles.profile_title}>Укажите кошелек, сумму и валюту для обмена</p>

          <div className={styles.profile_inputs}>
            <MyInput label="Отдаю" sx={{width: 164}}/>
            <MySelector/>
          </div>
          <div className={styles.profile_inputs}>
            <MyInput label="Получаю" sx={{width: 164}}/>
            <MySelector/>
          </div>

          <MyButton
            size="largeWithIcon"
            variant="contained"
            endIcon={<CachedRoundedIcon/>}
          >Обменять
          </MyButton>

        </div>

      </section>
      <ProfileSidebar/>
    </div>
  );
};

export default CurrencyExchangePage;