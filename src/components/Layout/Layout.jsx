import React, { useEffect, useState } from 'react'

import { MyButton } from '../../components/MyUI/MyButton'
import { MySearch } from '../../components/MyUI/MySearch'
import { CurrencySlider } from '../../components/MyUI/Sliders/CurrencySlider'
import { MyChart } from '../../components/MyUI/MyChart'
import { ReactComponent as PositiveArrowIcon } from '../../assets/icons/positiveArrowIcon.svg'
import { NavSidebar } from '../../components/NavSidebar'
import { ProfileSidebar } from '../../components/ProfileSidebar'
import { fetchCurrencies, fetchNews, fetchValutes } from '../../api/api'
import axios from 'axios'
import { NavLink, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllValutes } from '../../redux/actions/valuteAction'

import styles from './styles.module.scss'
import { WalletsSlider } from '../../components/MyUI/Sliders/WalletsSlider'
import { Skeleton } from '@mui/material'
import { Avatar } from '../ProfileSidebar/Avatar'
import { Wallets } from '../ProfileSidebar/SidebarWallets'
import { LastTransactions } from '../ProfileSidebar/LastTransactions'
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded'

const Layout = () => {
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getAllValutes())
  // }, [])

  return (
    <div className={styles.page_layout}>
      <section className={styles.sidebar}>
        <div className={styles.sidebar__container}>
          <div className={styles.sidebar__links}>
            <div className={styles.sidebar__logo}>
              <Skeleton variant='rectangular'>
                <p className={styles.sidebar__logo__text_bold}>justice</p>
                <p className={styles.sidebar__logo__text}>finance</p>
              </Skeleton>
            </div>

            {Array(5)
              .fill()
              .map((value, index) => (
                <Skeleton variant='rectangular' key={index} />
              ))}
          </div>

          <div>
            <div className={styles.sidebar__line}></div>
            <div className={styles.sidebar__leave_button}>
              <Skeleton variant='rectangular'>
                <MyButton
                  fullWidth
                  size='mediumWithIcon'
                  variant='text'
                  startIcon={<ExitToAppRoundedIcon />}
                  sx={{ justifyContent: 'start' }}
                >
                  Выход
                </MyButton>
              </Skeleton>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.main_container}>
        <div className={styles.header__nav}>
          <Skeleton variant='rectangular'>
            <p className={styles.header__title}>Курсы валют</p>
            <div className={styles.header__search_wrapper}></div>
          </Skeleton>
        </div>

        <div className={styles.currency}>
          <Skeleton variant='rectangular'>
            <div>
              <p className={styles.currency__title}>USD / RUB • CURRENCY</p>
              <p className={styles.currency__subtitle}>
                US Dollar/Russian Ruble
              </p>
            </div>
          </Skeleton>

          <Skeleton variant='rectangular'>
            <NavLink to={'/currency-exchange'}>
              <MyButton variant='contained'>Обменять</MyButton>
            </NavLink>
          </Skeleton>
        </div>

        <div className={styles.result}>
          <div className={styles.result__nums}>
            <Skeleton variant='rectangular'>
              <span className={styles.result__num_title}>83,8750</span>
            </Skeleton>
            <Skeleton variant='rectangular'>
              <div className={styles.result__num_percent}>
                <PositiveArrowIcon />
                <span>0,45 %</span>
              </div>
            </Skeleton>
            <Skeleton variant='rectangular'>
              <span className={styles.result__num_today}>+0,3750 Today</span>
            </Skeleton>
          </div>

          <Skeleton variant='rectangular'>
            <div>
              <p className={styles.result__date}>12 Apr., 12:28:25 UTC</p>
            </div>
          </Skeleton>
        </div>
      </section>

      <section className={styles.right_sidebar}>
        <div className={styles.right_sidebar__container}>
          <Skeleton variant='circular' width={96} height={96}></Skeleton>

          <Skeleton variant='rectangular' с width={224} height={148}></Skeleton>

          <div className={styles.transactions}>
            <Skeleton variant='rectangular'>
              <div className={styles.transactions__title}>
                <p className={styles.transactions__text_500}>
                  Последние транзакции
                </p>
              </div>
            </Skeleton>
            <div className={styles.l_transactions}>
              {Array(3)
                .fill()
                .map((value, index) => {
                  return (
                    <Skeleton variant='rectangular' key={index}>
                      <div className={styles.l_transactions__item}>
                        <p className={styles.l_transactions__s12}>
                          <span>-1000</span>
                          <span>1000</span>
                          <span>+1000</span>
                          <span>1000</span>
                        </p>
                      </div>
                    </Skeleton>
                  )
                })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Layout
