import React from 'react';
import {NavSidebar} from "../../components/NavSidebar";
import {ProfileSidebar} from "../../components/ProfileSidebar";
import styles from "../TransactionPage/styles.module.scss";
import {AddButton, NavButton} from "../../components/MyUI/MyNavButton";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CachedRoundedIcon from "@mui/icons-material/CachedRounded";

const TransactionPage = () => {
  return (
    <div className={styles.page_layout}>
      <NavSidebar/>
      <section className={styles.main}>
        <div

        >
          <p className={styles.main__title}>Транзакции</p>
        </div>
        <div className={styles.main__nav}>
          <p className={styles.margin}>12 апреля</p>
          <p className={styles.margin}>Обменяно</p>
          <p className={styles.margin}>Получено</p>
          <p className={styles.margin}>Статус</p>
        </div>

        <div className={styles.transa}>
          <div className={styles.transa2}>
            <NavButton disabled>
              <CachedRoundedIcon/>
            </NavButton>
            <div className={styles.pleft}>
              <div className={styles.s14}>USD to RUB</div>
              <div className={styles.s12}>04:00</div>
            </div>
          </div>


          <div className={styles.transa2}>
            <div className={styles.s14p}>-123</div>
            <div className={styles.s12}>USD</div>
          </div>

          <div className={styles.transa2}>
            <div className={styles.s14p}>+10000</div>
            <div className={styles.s12}>RUB</div>
          </div>

          <div className={styles.color}>
            <p className={styles.marg}>В обработке</p>

          </div>
        </div>
        <div className={styles.transa}>
          <div className={styles.transa2}>
            <NavButton disabled>
              <CachedRoundedIcon/>
            </NavButton>
            <div className={styles.pleft}>
              <div className={styles.s14}>USD to RUB</div>
              <div className={styles.s12}>04:00</div>
            </div>
          </div>


          <div className={styles.transa2}>
            <div className={styles.s14p}>-123</div>
            <div className={styles.s12}>USD</div>
          </div>

          <div className={styles.transa2}>
            <div className={styles.s14p}>+10000</div>
            <div className={styles.s12}>RUB</div>
          </div>

          <div className={styles.color2}>
            <p className={styles.marg}>Успешно</p>

          </div>
        </div>
        <div className={styles.transa}>
          <div className={styles.transa2}>
            <NavButton disabled>
              <CachedRoundedIcon/>
            </NavButton>
            <div className={styles.pleft}>
              <div className={styles.s14}>USD to RUB</div>
              <div className={styles.s12}>04:00</div>
            </div>
          </div>


          <div className={styles.transa2}>
            <div className={styles.s14p}>-123</div>
            <div className={styles.s12}>USD</div>
          </div>

          <div className={styles.transa2}>
            <div className={styles.s14p}>+10000</div>
            <div className={styles.s12}>RUB</div>
          </div>

          <div className={styles.color3}>
            <p className={styles.marg}>Отклонено</p>

          </div>
        </div>


      </section>
      <ProfileSidebar/>
    </div>
  );
};

export default TransactionPage;