import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { MySearch } from '../../components/MyUI/MySearch'
import { CurrencySlider } from '../../components/MyUI/Sliders/CurrencySlider'
import { MyChart } from '../../components/MyUI/MyChart'
import { NavSidebar } from '../../components/NavSidebar'
import { ProfileSidebar } from '../../components/ProfileSidebar'
import { ChartHeader } from '../../components/ChartHeader'
import { getAllValutes } from '../../redux/actions/valuteAction'

import styles from '../ExchangeRatePage/styles.module.scss'

const ExchangeRatePage = () => {
  // const isLoading = useSelector((state) => state.user.isLoading)
  // console.log('=>User', isLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllValutes())
  }, [])

  return (
    <div className={styles.page_layout}>
      <NavSidebar />
      <section className={styles.main}>
        {/*{isLoading && <h1>Load</h1>}*/}
        <div className={styles.header__nav}>
          <div>
            <p className={styles.header__title}>Курсы валют</p>
          </div>

          <MySearch />
        </div>

        <div className={styles.slider}>
          <CurrencySlider />
        </div>
        <ChartHeader />

        <div className={styles.range}>
          <span className={styles.range__bg}>1 Day</span>
        </div>

        <MyChart />
      </section>
      <ProfileSidebar />
    </div>
  )
}

export default ExchangeRatePage
