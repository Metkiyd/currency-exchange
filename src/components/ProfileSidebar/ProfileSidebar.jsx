import React from 'react'

import { Avatar } from './Avatar'
import { Wallets } from './SidebarWallets'
import { LastTransactions } from './LastTransactions'

import styles from '../ProfileSidebar/styles.module.scss'

const ProfileSidebar = () => {
  return (
    <section className={styles.right_sidebar}>
      <div className={styles.right_sidebar__container}>
        <Avatar />
        <Wallets />
        <LastTransactions />
      </div>
    </section>
  )
}
export default ProfileSidebar
