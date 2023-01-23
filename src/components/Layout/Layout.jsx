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

const Layout = () => {
  const dispatch = useDispatch()
  const fetchValutes = () => dispatch(getAllValutes())

  useEffect(() => {
    fetchValutes()
  }, [])

  const allValutes = useSelector((state) => state.allValutes.allValutes)
  // console.log('=>allValutes-state', allValutes)

  return (
    <div className={styles.page_layout}>
      <NavSidebar />
      <section className={styles.main_container}>
        <Outlet />

        {/*<div className={styles.header__nav}>*/}
        {/*  <p className={styles.header__title}>Курсы валют</p>*/}
        {/*  <div className={styles.header__search_wrapper}>*/}
        {/*    <MySearch fullWidth />*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className={styles.slider}>*/}
        {/*  /!*<WalletsSlider />*!/*/}
        {/*  /!*<App />*!/*/}
        {/*  <CurrencySlider allValutes={allValutes} />*/}
        {/*</div>*/}
        {/*<div className={styles.currency}>*/}
        {/*  <div>*/}
        {/*    <p className={styles.currency__title}>USD / RUB • CURRENCY</p>*/}
        {/*    <p className={styles.currency__subtitle}>US Dollar/Russian Ruble</p>*/}
        {/*  </div>*/}
        {/*  <NavLink to={'/currency-exchange'}>*/}
        {/*    <MyButton variant='contained'>Обменять</MyButton>*/}
        {/*  </NavLink>*/}
        {/*</div>*/}
        {/*<div className={styles.result}>*/}
        {/*  <div className={styles.result__nums}>*/}
        {/*    <span className={styles.result__num_title}>83,8750</span>*/}
        {/*    <div className={styles.result__num_percent}>*/}
        {/*      <PositiveArrowIcon />*/}
        {/*      <span>0,45 %</span>*/}
        {/*    </div>*/}
        {/*    <span className={styles.result__num_today}>+0,3750 Today</span>*/}
        {/*  </div>*/}
        {/*  <div>*/}
        {/*    <p className={styles.result__date}>12 Apr., 12:28:25 UTC</p>*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/*<div className={styles.range}>*/}
        {/*  <span className={styles.range__bg}>1 Day</span>*/}
        {/*</div>*/}

        {/*<MyChart />*/}
      </section>
      <ProfileSidebar />
    </div>
  )
}

export default Layout
