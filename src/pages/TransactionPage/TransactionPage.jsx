import React from 'react';
import {NavSidebar} from "../../components/NavSidebar";
import {ProfileSidebar} from "../../components/ProfileSidebar";
import styles from "../ExchangeRatePage/styles.module.scss";

const TransactionPage = () => {
  return (
    <div className={styles.page_layout}>
      <NavSidebar/>
      <section>
        123898
      </section>
      <ProfileSidebar/>
    </div>
  );
};

export default TransactionPage;