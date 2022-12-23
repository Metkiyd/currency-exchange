import Slider from "react-slick";
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../../../pages/WalletsPage/Wallets/styles.module.scss";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import {IconButton} from "@mui/material";
import {NavLink} from "react-router-dom";
import {wallets} from "../WalletsSlider/WalletsSlider";


function SidebarSlider() {

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


    </div>
  );
}

export default SidebarSlider;