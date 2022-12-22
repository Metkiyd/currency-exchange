import Slider from "react-slick";
// import './style.css'
import React from 'react';
import {NextButton, PrevButton} from "../MyNavButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ReactComponent as RubIcon} from '../../../../src/assets/icons/rubIcon.svg';
import {ReactComponent as UsdIcon} from '../../../assets/icons/usdIcon.svg';
import {ReactComponent as EurIcon} from '../../../assets/icons/eurIcon.svg';
import {ReactComponent as CnyIcon} from '../../../assets/icons/cnyIcon.svg';
import {ReactComponent as TryIcon} from '../../../assets/icons/tryIcon.svg';
import styles from "../../../pages/WalletsPage/Wallets/styles.module.scss";

const wallets = [
  {
    balance: '120 000, 00',
    currency: 'RUB',
    sign: '₽',
    icon: <RubIcon/>
  },
  {
    balance: '120 000, 00',
    currency: 'USD',
    sign: '$',
    icon: <UsdIcon/>
  },
  {
    balance: '120 000, 00',
    currency: 'CNY',
    sign: '¥',
    icon: <CnyIcon/>
  },
  {
    balance: '120 000, 00',
    currency: 'EUR',
    sign: '€',
    icon: <EurIcon/>
  },
  {
    balance: '120 000, 00',
    currency: 'TRY',
    sign: '₺',
    icon: <TryIcon/>
  },

]



function SlickSlider2() {
  function NextArrow(props) {
    const {onClick} = props;
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <NextButton onClick={onClick}/>
      </div>
    );
  }

  function PrevArrow(props) {
    const {onClick} = props;
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <PrevButton onClick={onClick}/>
      </div>
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    // centerPadding: '20px',
    // adaptiveHeight: true
  };

  return (
    <div>
      <div style={{width: '816px', margin: "auto"}}>
        <Slider
          // style={{display: 'flex'}}
          {...settings}>
          {wallets.map(
            ({
               currency,
               sign,
               balance,
               icon,
               status
             }) => {
              return (
                <div className={styles.card}>
                  <div className={styles.country}>
                    <p className={styles.rub}>
                      {currency}
                    </p>
                    {icon}
                    {/*<RubIcon className={styles.svg_flag}/>*/}
                  </div>
                  <p className={styles.count}>
                    {balance} {sign}
                  </p>
                </div>

              )
            }
          )
          }
        </Slider>
      </div>
    </div>
  );
}

export default SlickSlider2;


