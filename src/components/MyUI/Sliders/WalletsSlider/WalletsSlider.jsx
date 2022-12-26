import Slider from "react-slick";
import './style.css'
import React, {useState} from 'react';
import {NextButton, PrevButton} from "../../MyNavButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import {ReactComponent as RubIcon} from '../../../../assets/icons/rubIcon.svg';
// import {ReactComponent as UsdIcon} from '../../../../assets/icons/usdIcon.svg';
// import {ReactComponent as EurIcon} from '../../../../assets/icons/eurIcon.svg';
// import {ReactComponent as CnyIcon} from '../../../../assets/icons/cnyIcon.svg';
// import {ReactComponent as TryIcon} from '../../../../assets/icons/tryIcon.svg';
import styles from "../../../../pages/WalletsPage/Wallets/styles.module.scss";
import {NavLink} from "react-router-dom";



// const wallets = JSON.parse(localStorage.getItem('wallets')) || []

// export const wallets = [
//   {
//     id: 1,
//     balance: '10 000, 00',
//     currency: 'RUB',
//     sign: '₽',
//     icon: <RubIcon/>
//   },
//   {
//     id: 2,
//     balance: '12 000, 00',
//     currency: 'USD',
//     sign: '$',
//     icon: <UsdIcon/>
//   },
//   {
//     id: 3,
//     balance: '120 000, 00',
//     currency: 'CNY',
//     sign: '¥',
//     icon: <CnyIcon/>
//   },
//   {
//     id: 4,
//     balance: '20 000, 00',
//     currency: 'EUR',
//     sign: '€',
//     icon: <EurIcon/>
//   },
//   {
//     id: 5,
//     balance: '15 000, 00',
//     currency: 'TRY',
//     sign: '₺',
//     icon: <TryIcon/>
//   },
//
// ]

function WalletsSlider() {

  const allUsers = JSON.parse(localStorage.getItem("allUsers"))
// console.log('===>AllUsers', allUsers)

  const authorized = JSON.parse(localStorage.getItem("authorized"))
// console.log('===>authorized', authorized)

  const loggedUser = allUsers.find(user => authorized === user.id) || null
  console.log('===>loggedUser', loggedUser)

  const [wallets, setWallets] = useState(loggedUser.wallets)
  console.log('===>wallets', wallets)

  const [sliderRef, setSliderRef] = React.useState(null)

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div
      style={{
        display: "flex",
        gap: '64px',
      }}>
      <div style={{
        width: '712px',
      }}>

        <Slider
          ref={setSliderRef}
          {...settings}>

          {wallets.map(
            ({
               currency,
               id,
               sign,
               balance,
               icon,

             }) => {
              return (
                <NavLink key={id} to={`/selected-wallet/${id}`}>
                  <div className={styles.card}>
                    <div className={styles.country}>
                      <p className={styles.rub}>
                        {currency}
                      </p>
                      {icon}
                    </div>
                    <p className={styles.count}>
                      {balance} {sign}
                    </p>
                  </div>
                </NavLink>

              )
            }
          )
          }
        </Slider>


      </div>

      <div
        style={{
          display: "flex",
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '16px',
        }}
      >
        <NextButton onClick={sliderRef?.slickNext}/>
        <PrevButton onClick={sliderRef?.slickPrev}/>
      </div>
    </div>
  );
}

export default WalletsSlider;


