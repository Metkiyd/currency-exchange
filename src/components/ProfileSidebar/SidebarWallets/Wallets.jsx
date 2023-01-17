import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { AddButton } from '../../MyUI/MyNavButton'
import { SidebarSlider } from '../../MyUI/Sliders/SidebarSlider'

import { getAllPosts } from '../../../redux/actions/postsAction'

import styles from './styles.module.scss'

const Wallets = () => {
  const dispatch = useDispatch()
  const fetchPosts = () => dispatch(getAllPosts())

  useEffect(() => {
    fetchPosts()
  }, [])

  const wallets = useSelector((state) => state.allPosts.posts)
  // console.log('=>wallets-DB', wallets)

  return (
    <div>
      {wallets.length ? (
        <SidebarSlider />
      ) : (
        <>
          <p className={styles.text_500}>Мой баланс</p>
          <div className={styles.add_wallet}>
            <p>Добавьте кошелек</p>
            <NavLink to={'/wallets'}>
              <AddButton />
            </NavLink>
          </div>
        </>
      )}
    </div>
  )
}

export default Wallets
