import React, { useState } from 'react'
import Slider from 'react-slick'

import { NavButton } from '../../MyNavButton'
import { ReactComponent as PositiveArrowIcon } from '../../../../assets/icons/positiveArrowIcon.svg'
import { ReactComponent as NegativeArrowIcon } from '../../../../assets/icons/negativeArrowIcon.svg'

import './style.css'
import styles from '../../../../pages/ExchangeRatePage/styles.module.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined'
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined'
import { IconButton } from '@mui/material'
import { useSelector } from 'react-redux'

function CurrencySlider() {
  const allValutes = useSelector((state) => state.allValutes.allValutes)

  const [sliderRef, setSliderRef] = useState(null)

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1330,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const renderValute = allValutes.map(
    ({ name, rate, changePerc, change, increase }) => {
      return (
        <div key={name} className={styles.card}>
          <div className={styles.resCur}>
            {increase ? (
              <div className={styles.result__num_percent}>
                <PositiveArrowIcon />
              </div>
            ) : (
              <div className={styles.result__num_percent2}>
                <NegativeArrowIcon />
              </div>
            )}

            <div className={styles.column1}>
              <span className={styles.one}>{name} / RUB</span>
              <span className={styles.two}>{rate}</span>
            </div>
          </div>

          <div className={styles[increase ? 'column2' : 'column3']}>
            <span className={styles.three}>{changePerc}%</span>
            <span className={styles.four}>{change}</span>
          </div>
        </div>
      )
    },
  )

  return (
    <div className={styles.slider_flex}>
      <div className={styles.slider_button}>
        <NavButton onClick={sliderRef?.slickPrev}>
          <ChevronLeftOutlinedIcon />
        </NavButton>
      </div>
      <div className={styles.slider_mobile_button}>
        <IconButton aria-label='prev' onClick={sliderRef?.slickPrev}>
          <ChevronLeftOutlinedIcon />
        </IconButton>
      </div>
      <div className={styles.slider_width}>
        <Slider ref={setSliderRef} {...settings}>
          {renderValute}
        </Slider>
      </div>
      <div className={styles.slider_mobile_button}>
        <IconButton aria-label='next' onClick={sliderRef?.slickNext}>
          <ChevronRightOutlinedIcon />
        </IconButton>
      </div>
      <div className={styles.slider_button}>
        <NavButton onClick={sliderRef?.slickNext}>
          <ChevronRightOutlinedIcon />
        </NavButton>
      </div>
    </div>
  )
}

export default CurrencySlider
