import React, { useEffect } from 'react'
import styles from './/styles.module.scss'
import { AddButton } from '../../../components/MyUI/MyNavButton'
import { SidebarSlider } from '../../../components/MyUI/Sliders/SidebarSlider'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../../../redux/actions/postsAction'
import { NavLink } from 'react-router-dom'

const Wallets = () => {

  const dispatch = useDispatch()
  const fetchPosts = () => dispatch(getAllPosts());

  useEffect(() => {
    fetchPosts();
  }, [])

  const wallets = useSelector((state) => state.allPosts.posts);
  // console.log('=>wallets-DB', wallets)

  return (
    <div>
      {wallets.length ? (
        <SidebarSlider />
      ) : ( <>
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
