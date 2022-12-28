import React, {useEffect, useState} from 'react';
import styles from "../ExchangeRatePage/styles.module.scss";
import {MyButton} from "../../components/MyUI/MyButton";
import {MySearch} from "../../components/MyUI/MySearch";
import {CurrencySlider} from "../../components/MyUI/Sliders/CurrencySlider";
import {MyChart} from "../../components/MyUI/MyChart";
import {ReactComponent as PositiveArrowIcon} from '../../assets/icons/positiveArrowIcon.svg';
import {NavSidebar} from "../../components/NavSidebar";
import {ProfileSidebar} from "../../components/ProfileSidebar";
import {fetchCurrencies, fetchValutes} from "../../api/api";
import axios from "axios";
import {NavLink} from "react-router-dom";

const ExchangeRatePage = () => {

  const [allValutes, setAllValutes] = useState([])

  useEffect(() => {
    axios.get(`https://www.cbr-xml-daily.ru/daily_json.js`)
      .then(({data}) => {
        const valutes = Object.values(data.Valute)
        const tranformed = valutes.map(
          (valute) => {
            const obj = {
              id: valute.ID,
              name: valute.CharCode,
              fullName: valute.Name,
              rate: ((valute.Value) / (valute.Nominal)).toFixed(4),
              change: ((valute.Value) - (valute.Previous)).toFixed(4),
              changePerc: ((valute.Value) / (valute.Previous) - 1).toFixed(4),
              nominal: valute.Nominal,
              price: valute.Value,
              prev: valute.Previous,
            }
            return obj;
          })
        setAllValutes(tranformed)
      })
    // fetchCurrencies()
    // fetchValutes()
    // setAllValutes(fetchValutes())
    // console.log('===>valutesState', valutes)
    // getValutes()
  },[])

  // const getValutes = async () => {
  //   const response = await fetchValutes();
  //   return response
  //   console.log('===>response', response)
  // }

  // setValutes(fetchCurrencies())
  // fetchCurrencies()
  console.log('===>valutesState2', allValutes)


  return (
    <div className={styles.page_layout}>
      <NavSidebar/>
      <section className={styles.main_container}>
        <div className={styles.header__nav}>
          <p className={styles.header__title}>Курсы валют</p>
          <div className={styles.header__search_wrapper}>
            <MySearch fullWidth/>
          </div>
        </div>

        <CurrencySlider
          allValutes={allValutes}
        />
        <div className={styles.currency}>
          <div>
            <p className={styles.currency__title}>
              USD / RUB • CURRENCY
            </p>
            <p className={styles.currency__subtitle}>
              US Dollar/Russian Ruble</p>
          </div>
          <NavLink to={'/currency-exchange'}>
            <MyButton variant="contained">Обменять</MyButton>
          </NavLink>

        </div>
        <div className={styles.result}>
          <div className={styles.result__nums}>
            <span className={styles.result__num_title}>83,8750</span>
            <div className={styles.result__num_percent}>
              <PositiveArrowIcon/>
              <span>
                0,45 %</span>
            </div>
            <span className={styles.result__num_today}>+0,3750 Today</span>
          </div>
          <div>
            <p className={styles.result__date}>12 Apr., 12:28:25 UTC</p>
          </div>
        </div>

        <div className={styles.range}>
          <span className={styles.range__bg}>
            1 Day
          </span>

        </div>

        <MyChart/>

      </section>
      <ProfileSidebar/>
    </div>
  );
};

export default ExchangeRatePage;