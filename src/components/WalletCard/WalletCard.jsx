import React from 'react'
import styles from '../WalletCard/styles.module.scss'

const WalletCard = (props) => {
  const { currency, sign, balance, icon } = props

  return (
    <div className={styles.card}>
      <div className={styles.country}>
        <p className={styles.rub}>{currency}</p>
        <img src={icon} alt={currency} />
      </div>
      <p className={styles.count}>
        {balance} {sign}
      </p>
    </div>
  )
}

export default WalletCard
