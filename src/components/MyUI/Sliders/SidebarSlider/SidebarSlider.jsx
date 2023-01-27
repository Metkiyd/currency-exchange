import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'

import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import styles from '../../../ProfileSidebar/SidebarWallets/styles.module.scss'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined'
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined'
import { IconButton } from '@mui/material'
import { getAllPosts } from '../../../../redux/actions/postsAction'
import { WalletCard } from '../../../WalletCard'
// import {wallets} from "../WalletsSlider/WalletsSlider";

function SidebarSlider() {
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   // dispatch(getAllPosts())
  // }, [])

  const wallets = useSelector((state) => state.allPosts.posts)
  // console.log('=>wallets-DB', wallets)

  const [sliderRef, setSliderRef] = useState(null)

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  const renderWallets = wallets.map(
    ({ currency, number, sign, balance, icon }) => {
      return (
        <NavLink key={number} to={`/wallets/${number}`}>
          <WalletCard
            currency={currency}
            icon={icon}
            balance={balance}
            sign={sign}
          />
        </NavLink>
      )
    },
  )

  return (
    <div>
      <div
        style={{
          width: '224px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <p className={styles.text_500}>Мой баланс</p>
          <div
            style={{
              display: 'flex',
            }}
          >
            <IconButton aria-label='prev' onClick={sliderRef?.slickPrev}>
              <ChevronLeftOutlinedIcon />
            </IconButton>

            <IconButton aria-label='next' onClick={sliderRef?.slickNext}>
              <ChevronRightOutlinedIcon />
            </IconButton>
          </div>
        </div>

        <Slider ref={setSliderRef} {...settings}>
          {renderWallets}
        </Slider>
      </div>
    </div>
  )
}

export default SidebarSlider
