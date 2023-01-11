import React from 'react'
import styles from './/styles.module.scss'
import { AddButton } from '../../../components/MyUI/MyNavButton'
import { SidebarSlider } from '../../../components/MyUI/Sliders/SidebarSlider'

const Wallets = () => {
  return (
    <div>
      <p className={styles.text_500}>Мой баланс</p>
      <div className={styles.add_wallet}>
        <p>Добавьте кошелек</p>
        <AddButton />
      </div>

      {/*<SidebarSlider />*/}
    </div>
  )
}

export default Wallets
