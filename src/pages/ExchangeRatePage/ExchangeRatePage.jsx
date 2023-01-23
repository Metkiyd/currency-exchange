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
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllValutes } from '../../redux/actions/valuteAction'
import { ReactComponent as NegativeArrowIcon } from '../../assets/icons/negativeArrowIcon.svg'

import styles from '../ExchangeRatePage/styles.module.scss'
import { WalletsSlider } from '../../components/MyUI/Sliders/WalletsSlider'

const ExchangeRatePage = () => {
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
        <div className={styles.header__nav}>
          <div>
            <p className={styles.header__title}>Курсы валют</p>
          </div>

          <MySearch fullWidth allValutes={allValutes} />
        </div>
        <div className={styles.slider}>
          {/*<WalletsSlider />*/}
          {/*<App />*/}
          <CurrencySlider allValutes={allValutes} />
        </div>

        {/*<div className={styles.currency}>*/}
        {/*  <div>*/}
        {/*    <p className={styles.currency__title}>*/}
        {/*      {allValutes[13].name} / RUB • CURRENCY*/}
        {/*    </p>*/}
        {/*    <p className={styles.currency__subtitle}>*/}
        {/*      {allValutes[13].fullName}/Российский рубль*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*  <NavLink to={'/currency-exchange'}>*/}
        {/*    <MyButton variant='contained'>Обменять</MyButton>*/}
        {/*  </NavLink>*/}
        {/*</div>*/}
        {/*<div className={styles.result}>*/}
        {/*  <div className={styles.result__nums}>*/}
        {/*    <span className={styles.result__num_title}>*/}
        {/*      {allValutes[13].rate}*/}
        {/*    </span>*/}
        {/*    {allValutes[13].increase ? (*/}
        {/*      <div className={styles.flex_align}>*/}
        {/*        <div className={styles.result__num_percent}>*/}
        {/*          <PositiveArrowIcon />*/}
        {/*          <div*/}
        {/*            className={*/}
        {/*              styles[allValutes[13].increase ? 'column2' : 'column3']*/}
        {/*            }*/}
        {/*          >*/}
        {/*            <span>{allValutes[13].changePerc}%</span>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    ) : (*/}
        {/*      <div className={styles.flex_align}>*/}
        {/*        <div className={styles.result__num_percent2}>*/}
        {/*          <NegativeArrowIcon />*/}
        {/*          <div*/}
        {/*            className={*/}
        {/*              styles[allValutes[13].increase ? 'column2' : 'column3']*/}
        {/*            }*/}
        {/*          >*/}
        {/*            <span>{allValutes[13].changePerc}%</span>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    )}*/}

        {/*    {allValutes[13].increase ? (*/}
        {/*      <span className={styles.result__num_today}>*/}
        {/*        {allValutes[13].change} Today*/}
        {/*      </span>*/}
        {/*    ) : (*/}
        {/*      <span className={styles.result__num_today2}>*/}
        {/*        {allValutes[13].change} Today*/}
        {/*      </span>*/}
        {/*    )}*/}
        {/*  </div>*/}
        {/*  <div>*/}
        {/*    <p className={styles.result__date}>12 Apr., 12:28:25 UTC</p>*/}
        {/*  </div>*/}
        {/*</div>*/}

        <div className={styles.range}>
          <span className={styles.range__bg}>1 Day</span>
        </div>

        {/*<MyChart />*/}
      </section>
      <ProfileSidebar />
    </div>
  )
}

export default ExchangeRatePage
