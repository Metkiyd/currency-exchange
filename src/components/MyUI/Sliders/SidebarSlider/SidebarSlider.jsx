import Slider from "react-slick";
import React, {useState} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../../../pages/WalletsPage/SidebarWallets/styles.module.scss";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import {IconButton} from "@mui/material";
import {NavLink} from "react-router-dom";
// import {wallets} from "../WalletsSlider/WalletsSlider";

// const wallets = JSON.parse(localStorage.getItem('wallets')) || []


function SidebarSlider() {

  const allUsers = JSON.parse(localStorage.getItem("allUsers"))
// console.log('===>AllUsers', allUsers)

  const authorized = JSON.parse(localStorage.getItem("authorized"))
// console.log('===>authorized', authorized)

  const loggedUser = allUsers.find(user => authorized === user.id) || null
  // console.log('===>loggedUser', loggedUser)

  const [wallets, setWallets] = useState(loggedUser.wallets)
  // console.log('===>wallets', wallets)

  const [sliderRef, setSliderRef] = React.useState(null)

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div>
      <div style={{
        width: '224px',
      }}>
        <div
          style={{
            display: "flex",
            justifyContent: 'space-between',
          }}
        >
          <p className={styles.text_500}>Мой баланс</p>
          <div style={{
            display: "flex",
          }}>
            <IconButton
              aria-label="prev"
              onClick={sliderRef?.slickPrev}
            >
              <ChevronLeftOutlinedIcon/>
            </IconButton>

            <IconButton
              aria-label="next"
              onClick={sliderRef?.slickNext}
            >
              <ChevronRightOutlinedIcon/>
            </IconButton>
          </div>


        </div>

        <Slider
          ref={setSliderRef}
          {...settings}>
          {wallets.map(
            ({
               currency,
               sign,
               balance,
               icon,
               id,
             }) => {
              return (
                <NavLink key={id} to={`/selected-wallet/${id}`}>
                  <div className={styles.card}>
                    <div className={styles.country}>
                      <p className={styles.rub}>
                        {currency}
                      </p>
                      <img src={icon} alt={currency}/>
                      {/*{icon}*/}
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


    </div>
  );
}

export default SidebarSlider;