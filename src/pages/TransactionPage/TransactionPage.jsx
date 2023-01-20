import React from 'react'
import { NavSidebar } from '../../components/NavSidebar'
import { ProfileSidebar } from '../../components/ProfileSidebar'
import { Transactions } from './Transactions'
import styles from '../TransactionPage/styles.module.scss'

const TransactionPage = () => {
  return (
    <div className={styles.page_layout}>
      <NavSidebar />
      <section className={styles.main}>
        <div>
          <p className={styles.main__title}>Транзакции</p>
        </div>
        <div className={styles.main__nav}>
          <p className={styles.main__margin}>Дата</p>
          <p className={styles.main__margin}>Обменяно</p>
          <p className={styles.main__margin}>Получено</p>
          <p className={styles.main__margin}>Статус</p>
        </div>
        <Transactions />
      </section>
      <ProfileSidebar />
    </div>
  )
}

export default TransactionPage
