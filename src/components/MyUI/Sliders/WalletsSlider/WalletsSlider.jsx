import React, {useState, useEffect} from 'react';
import Slider from "react-slick";

import {NextButton, PrevButton} from "../../MyNavButton";

import {NavLink} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../../../../redux/actions/postsAction'

import './style.css'
import styles from "../../../../pages/WalletsPage/SidebarWallets/styles.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function WalletsSlider() {
  const dispatch = useDispatch()
  const fetchPosts = () => dispatch(getAllPosts());

  useEffect(() => {
    fetchPosts();
  }, [])

  const wallets = useSelector((state) => state.allPosts.posts);
  // console.log('=>wallets-DB', wallets)

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
                <NavLink key={number} to={`/wallets/${number}`}>
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


