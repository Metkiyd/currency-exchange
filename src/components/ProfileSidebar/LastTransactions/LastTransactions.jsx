import React from 'react';
import styles from "../LastTransactions/styles.module.scss";
import SyncAltRoundedIcon from "@mui/icons-material/SyncAltRounded";

const recentTransactions = [
  {
    outcome: '123,02',
    outCur: 'USD',
    income: '10000',
    inCur: 'RUB',
    status: 'success'
  },
  {
    outcome: '12,02',
    outCur: 'USD',
    income: '1000',
    inCur: 'RUB',
    status: 'success'
  },
  {
    outcome: '123,02',
    outCur: 'USD',
    income: '10000',
    inCur: 'RUB',
    status: 'pending'
  },
  {
    outcome: '123,02',
    outCur: 'USD',
    income: '10000',
    inCur: 'RUB',
    status: 'reject'
  },


]

const LastTransactions = () => {
  return (

    <div className={styles.transactions}>


      <div className={styles.transactions__title}>
        <p className={styles.transactions__text_500}>Последние транзакции</p>
      </div>

      {/*<div className={styles.transactions__wrapper}>*/}
      {/*  <div className={styles.transactions__container}>*/}
      {/*    <SyncAltRoundedIcon sx={{fontSize: '32px'}}/>*/}
      {/*    <p className={styles.transactions__text}*/}
      {/*    >Вы не совершили не одной транзакции</p>*/}
      {/*  </div>*/}
      {/*</div>*/}

      <div className={styles.l_transactions}>
        {recentTransactions.map(
          ({
             outcome,
             outCur,
             income,
             inCur,
             status
           }) => {
            return (
              <div className={styles.l_transactions__item}>
                <p className={styles.l_transactions__s12}>
                  <span>-{outcome}</span>
                  <span>{outCur}</span>
                  <span>/</span>
                  <span>+{income}</span>
                  <span>{inCur}</span>
                </p>
                <div className={styles[`l_transactions__${status}`]}></div>
              </div>

            )
          }
        )
        }
      </div>
    </div>


  );
};

export default LastTransactions;