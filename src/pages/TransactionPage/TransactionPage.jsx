import React from 'react';
import {NavSidebar} from "../../components/NavSidebar";
import {ProfileSidebar} from "../../components/ProfileSidebar";
import styles from "../TransactionPage/styles.module.scss";
import {AddButton, NavButton} from "../../components/MyUI/MyNavButton";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CachedRoundedIcon from "@mui/icons-material/CachedRounded";
import {Transactions} from "./Transactions";

const TransactionPage = () => {
  return (
    <div className={styles.page_layout}>
      <NavSidebar/>
      <section className={styles.main}>
        <div>
          <p className={styles.main__title}>Транзакции</p>
        </div>
        <div className={styles.main__nav}>
          <p className={styles.main__margin}>12 апреля</p>
          <p className={styles.main__margin}>Обменяно</p>
          <p className={styles.main__margin}>Получено</p>
          <p className={styles.main__margin}>Статус</p>
        </div>
        <Transactions/>
      </section>
      <ProfileSidebar/>
    </div>
  );
};

export default TransactionPage;