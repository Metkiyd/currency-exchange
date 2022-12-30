import Slider from "react-slick";
import './style.css'
import React, {useState} from 'react';
import {NextButton, PrevButton} from "../../MyNavButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "../../../../pages/WalletsPage/SidebarWallets/styles.module.scss";
import {NavLink} from "react-router-dom";


function WalletsSlider() {

  const allUsers = JSON.parse(localStorage.getItem("allUsers"))
// console.log('===>AllUsers', allUsers)

  const authorized = JSON.parse(localStorage.getItem("authorized"))
// console.log('===>authorized', authorized)

  const loggedUser = allUsers.find(user => authorized === user.id) || null
  // console.log('===>loggedUser', loggedUser)

  const [wallets, setWallets] = useState(loggedUser.wallets)
  // console.log('===>wallets', wallets)

  const [sliderRef, setSliderRef] = useState(null)

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
               number,
               sign,
               balance,
               icon,
             }) => {
              return (
                <NavLink key={number} to={`/selected-wallet/${number}`}>
                  <div className={styles.card}>
                    <div className={styles.country}>
                      <p className={styles.rub}>
                        {currency}
                      </p>
                      <img src={icon} alt={currency}/>
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


