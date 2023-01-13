import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { NavButton } from '../../../components/MyUI/MyNavButton'

import { getTransactions } from '../../../redux/actions/transactionsAction'

import styles from '../Transactions/styles.module.scss'
import CachedRoundedIcon from '@mui/icons-material/CachedRounded'
import SyncAltRoundedIcon from '@mui/icons-material/SyncAltRounded'

const recentTransactions = [
  {
    outcome: '123,02',
    outCur: 'USD',
    income: '10000',
    inCur: 'RUB',
    status: 'success',
    text: 'Успешно',
  },
  {
    outcome: '12,02',
    outCur: 'USD',
    income: '1000',
    inCur: 'RUB',
    status: 'success',
    text: 'Успешно',
  },
  {
    outcome: '123,02',
    outCur: 'USD',
    income: '10000',
    inCur: 'RUB',
    status: 'pending',
    text: 'В обработке',
  },
  {
    outcome: '123,02',
    outCur: 'USD',
    income: '10000',
    inCur: 'RUB',
    status: 'reject',
    text: 'Отклонено',
  },
]

const Transactions = () => {
  const dispatch = useDispatch()
  const fetchTransactions = () => dispatch(getTransactions())

  useEffect(() => {
    fetchTransactions()
  }, [])

  const transactions = useSelector((state) => state.transactions.transactions)
  console.log('=>transactions', transactions)

  return (
    <div>
      {transactions.length ? (
        transactions.map(({ send, from, received, to, createdAt }) => {
          return (
            <div className={styles.transaction}>
              <div className={styles.transaction__column}>
                <NavButton disabled>
                  <CachedRoundedIcon />
                </NavButton>
                <div className={styles.transaction__date}>
                  <div className={styles.s14}>
                    {from} to {to}
                  </div>
                  <div className={styles.s12}>{createdAt}</div>
                </div>
              </div>
              <div className={styles.transaction__column}>
                <div className={styles.s14p}>-{send}</div>
                <div className={styles.s12}>{from}</div>
              </div>
              <div className={styles.transaction__column}>
                <div className={styles.s14p}>+{received}</div>
                <div className={styles.s12}>{to}</div>
              </div>
              <div
              // className={styles[status]}
              >
                <p className={styles.status_margin}>Success</p>
              </div>
            </div>
          )
        })
      ) : (
        <div className={styles.transaction__wrapper}>
          <div className={styles.transaction__container}>
            <SyncAltRoundedIcon sx={{ fontSize: '32px' }} />
            <p className={styles.transaction__text}>
              Вы не совершили не одной транзакции
            </p>
          </div>
        </div>
      )}

      {/*{recentTransactions.map(*/}
      {/*  ({ outcome, outCur, income, inCur, text, status }) => {*/}
      {/*    return (*/}
      {/*      <div className={styles.transaction}>*/}
      {/*        <div className={styles.transaction__column}>*/}
      {/*          <NavButton disabled>*/}
      {/*            <CachedRoundedIcon />*/}
      {/*          </NavButton>*/}
      {/*          <div className={styles.transaction__date}>*/}
      {/*            <div className={styles.s14}>*/}
      {/*              {outCur} to {inCur}*/}
      {/*            </div>*/}
      {/*            <div className={styles.s12}>04:00</div>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*        <div className={styles.transaction__column}>*/}
      {/*          <div className={styles.s14p}>-{outcome}</div>*/}
      {/*          <div className={styles.s12}>{outCur}</div>*/}
      {/*        </div>*/}
      {/*        <div className={styles.transaction__column}>*/}
      {/*          <div className={styles.s14p}>+{income}</div>*/}
      {/*          <div className={styles.s12}>{inCur}</div>*/}
      {/*        </div>*/}
      {/*        <div className={styles[status]}>*/}
      {/*          <p className={styles.status_margin}>{text}</p>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    )*/}
      {/*  },*/}
      {/*)}*/}
    </div>
  )
}

export default Transactions
