import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getTransactions } from '../../../redux/actions/transactionsAction'

import styles from '../LastTransactions/styles.module.scss'

import SyncAltRoundedIcon from '@mui/icons-material/SyncAltRounded'

// const recentTransactions = [
//   {
//     id: 1,
//     outcome: '123,02',
//     outCur: 'USD',
//     income: '10000',
//     inCur: 'RUB',
//     status: 'success',
//   },
//   {
//     id: 2,
//     outcome: '12,02',
//     outCur: 'USD',
//     income: '1000',
//     inCur: 'RUB',
//     status: 'success',
//   },
//   {
//     id: 3,
//     outcome: '123,02',
//     outCur: 'USD',
//     income: '10000',
//     inCur: 'RUB',
//     status: 'pending',
//   },
//   {
//     id: 4,
//     outcome: '123,02',
//     outCur: 'USD',
//     income: '10000',
//     inCur: 'RUB',
//     status: 'reject',
//   },
// ]

const LastTransactions = () => {
  const dispatch = useDispatch()
  const fetchTransactions = () => dispatch(getTransactions())

  const transactions = useSelector((state) => state.transactions.transactions)
  // console.log('=>transactions', transactions)

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <div className={styles.transactions}>
      <div className={styles.transactions__title}>
        <p className={styles.transactions__text_500}>Последние транзакции</p>
      </div>
      <div className={styles.l_transactions}>
        {transactions.length ? (
          transactions
            .slice(-3)
            .reverse()
            .map(({ _id, send, from, received, to, createdAt }) => {
              return (
                <div key={_id} className={styles.l_transactions__item}>
                  <p className={styles.l_transactions__s12}>
                    <span>-{send}</span>
                    <span>{from}</span>
                    <span>/</span>
                    <span>+{received}</span>
                    <span>{to}</span>
                  </p>
                  {/*<div className={styles[`l_transactions__${status}`]}></div>*/}
                  <div className={styles.l_transactions__success}></div>
                </div>
              )
            })
        ) : (
          <div className={styles.transactions__wrapper}>
            <div className={styles.transactions__container}>
              <SyncAltRoundedIcon sx={{ fontSize: '32px' }} />
              <p className={styles.transactions__text}>
                Вы не совершили не одной транзакции
              </p>
            </div>
          </div>
        )}

        {/*{recentTransactions.map(*/}
        {/*  ({ id, outcome, outCur, income, inCur, status }) => {*/}
        {/*    return (*/}
        {/*      <div key={id} className={styles.l_transactions__item}>*/}
        {/*        <p className={styles.l_transactions__s12}>*/}
        {/*          <span>-{outcome}</span>*/}
        {/*          <span>{outCur}</span>*/}
        {/*          <span>/</span>*/}
        {/*          <span>+{income}</span>*/}
        {/*          <span>{inCur}</span>*/}
        {/*        </p>*/}
        {/*        <div className={styles[`l_transactions__${status}`]}></div>*/}
        {/*      </div>*/}
        {/*    )*/}
        {/*  },*/}
        {/*)}*/}
      </div>
    </div>
  )
}

export default LastTransactions
