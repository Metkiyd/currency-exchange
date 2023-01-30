import React from 'react'
import styles from '../../pages/ExchangeRatePage/styles.module.scss'
import { NavLink } from 'react-router-dom'
import { MyButton } from '../MyUI/MyButton'
import { useSelector } from 'react-redux'
import { ReactComponent as PositiveArrowIcon } from '../../assets/icons/positiveArrowIcon.svg'
import { ReactComponent as NegativeArrowIcon } from '../../assets/icons/negativeArrowIcon.svg'

const ChartHeader = () => {
  const allValutes = useSelector((state) => state.allValutes.allValutes)

  const selectedValute = useSelector(
    (state) => state.selectedValute.selectedValute,
  )
  console.log('=>selectedValute-state', selectedValute)
  const today = new Date(Date.now()).toLocaleString()

  return (
    <div>
      {selectedValute !== null ? (
        <>
          <div className={styles.currency}>
            <div>
              <p className={styles.currency__title}>
                {selectedValute.name} / RUB • CURRENCY
              </p>
              <p className={styles.currency__subtitle}>
                {selectedValute.fullName}/Российский рубль
              </p>
            </div>
            <NavLink to={'/currency-exchange'}>
              <MyButton variant='contained'>Обменять</MyButton>
            </NavLink>
          </div>
          <div className={styles.result}>
            <div className={styles.result__nums}>
              <span className={styles.result__num_title}>
                {selectedValute.rate}
              </span>
              {selectedValute.increase ? (
                <div className={styles.flex_align}>
                  <div className={styles.result__num_percent}>
                    <PositiveArrowIcon />
                    <div
                      className={
                        styles[selectedValute.increase ? 'column2' : 'column3']
                      }
                    >
                      <span>{selectedValute.changePerc}%</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={styles.flex_align}>
                  <div className={styles.result__num_percent2}>
                    <NegativeArrowIcon />
                    <div
                      className={
                        styles[selectedValute.increase ? 'column2' : 'column3']
                      }
                    >
                      <span>{selectedValute.changePerc}%</span>
                    </div>
                  </div>
                </div>
              )}

              {selectedValute.increase ? (
                <span className={styles.result__num_today}>
                  {selectedValute.change} Today
                </span>
              ) : (
                <span className={styles.result__num_today2}>
                  {selectedValute.change} Today
                </span>
              )}
            </div>
            <div>
              <p className={styles.result__date}>{today}</p>
            </div>
          </div>
        </>
      ) : allValutes.length ? (
        <>
          <div className={styles.currency}>
            <div>
              <p className={styles.currency__title}>
                {allValutes[13].name} / RUB • CURRENCY
              </p>
              <p className={styles.currency__subtitle}>
                {allValutes[13].fullName}/Российский рубль
              </p>
            </div>
            <NavLink to={'/currency-exchange'}>
              <MyButton variant='contained'>Обменять</MyButton>
            </NavLink>
          </div>
          <div className={styles.result}>
            <div className={styles.result__nums}>
              <span className={styles.result__num_title}>
                {allValutes[13].rate}
              </span>
              {allValutes[13].increase ? (
                <div className={styles.flex_align}>
                  <div className={styles.result__num_percent}>
                    <PositiveArrowIcon />
                    <div
                      className={
                        styles[allValutes[13].increase ? 'column2' : 'column3']
                      }
                    >
                      <span>{allValutes[13].changePerc}%</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={styles.flex_align}>
                  <div className={styles.result__num_percent2}>
                    <NegativeArrowIcon />
                    <div
                      className={
                        styles[allValutes[13].increase ? 'column2' : 'column3']
                      }
                    >
                      <span>{allValutes[13].changePerc}%</span>
                    </div>
                  </div>
                </div>
              )}

              {allValutes[13].increase ? (
                <span className={styles.result__num_today}>
                  {allValutes[13].change} Today
                </span>
              ) : (
                <span className={styles.result__num_today2}>
                  {allValutes[13].change} Today
                </span>
              )}
            </div>
            <div>
              <p className={styles.result__date}>12 Apr., 12:28:25 UTC</p>
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  )
}

export default ChartHeader
