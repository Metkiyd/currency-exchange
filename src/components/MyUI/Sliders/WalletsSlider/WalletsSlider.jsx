import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'

import { NavButton } from '../../MyNavButton'

import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../../../../redux/actions/postsAction'

import myStyle from './style.css'
import styles from '../../../ProfileSidebar/SidebarWallets/styles.module.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined'
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined'
import { IconButton } from '@mui/material'

function WalletsSlider() {
  const dispatch = useDispatch()
  const fetchPosts = () => dispatch(getAllPosts())

  useEffect(() => {
    fetchPosts()
  }, [])

  const wallets = useSelector((state) => state.allPosts.posts)
  // console.log('=>wallets-DB', wallets)

  const [sliderRef, setSliderRef] = useState(null)

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const renderWallets = wallets.map(
    ({ currency, number, sign, balance, icon }) => {
      return (
        <NavLink key={number} to={`/wallets/${number}`}>
          <div className={styles.card}>
            <div className={styles.country}>
              <p className={styles.rub}>{currency}</p>
              <img src={icon} alt={currency} />
            </div>
            <p className={styles.count}>
              {balance} {sign}
            </p>
          </div>
        </NavLink>
      )
    },
  )

  return (
    <div className={styles.slider_flexgap}>
      <div className={styles.slider_width}>
        <Slider ref={setSliderRef} {...settings}>
          {renderWallets}
        </Slider>
      </div>
      <div className={styles.slider_buttons}>
        <NavButton onClick={sliderRef?.slickNext}>
          <ChevronRightOutlinedIcon />
        </NavButton>
        <NavButton onClick={sliderRef?.slickPrev}>
          <ChevronLeftOutlinedIcon />
        </NavButton>
      </div>
      <div className={styles.slider_mobile_buttons}>
        <IconButton aria-label='prev' onClick={sliderRef?.slickPrev}>
          <ChevronLeftOutlinedIcon />
        </IconButton>
        <IconButton aria-label='next' onClick={sliderRef?.slickNext}>
          <ChevronRightOutlinedIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default WalletsSlider
