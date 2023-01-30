import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
// import { NavLink } from 'react-router-dom'

import { NavSidebar } from '../../components/NavSidebar'
import { ProfileSidebar } from '../../components/ProfileSidebar'
import { MyInput } from '../../components/MyUI/MyInput'
import { MySelector } from '../../components/MyUI/MySelector'
import { MyButton } from '../../components/MyUI/MyButton'
import { MyModal } from '../../components/MyUI/MyModal'
import { WalletsSlider } from '../../components/MyUI/Sliders/WalletsSlider'

import axiosBack from '../../api/axiosBack'
import { getAllPosts } from '../../redux/actions/postsAction'

import styles from '../WalletsPage/styles.module.scss'
import 'react-toastify/dist/ReactToastify.css'
import { ReactComponent as WalletIcon } from '../../assets/icons/walletIcon.svg'
import { ReactComponent as GreenWalletIcon } from '../../../src/assets/icons/greenWalletIcon.svg'
// import { ReactComponent as GreenWalletIcon2 } from '../../../src/assets/icons/greenWalletIcon2.svg'
import RubIcon from '../../assets/icons/rubIcon.svg'
import UsdIcon from '../../assets/icons/usdIcon.svg'
import EurIcon from '../../assets/icons/eurIcon.svg'
import CnyIcon from '../../assets/icons/cnyIcon.svg'
import TryIcon from '../../assets/icons/tryIcon.svg'
import { NavLink } from 'react-router-dom'
import { WalletCard } from '../../components/WalletCard'
// import { IconButton } from '@mui/material'
// import axios from '../../api/axiosBack'

export const currencies = [
  {
    currency: 'RUB',
    sign: '₽',
    icon: RubIcon,
  },
  {
    currency: 'USD',
    sign: '$',
    icon: UsdIcon,
  },
  {
    currency: 'CNY',
    sign: '¥',
    icon: CnyIcon,
  },
  {
    currency: 'EUR',
    sign: '€',
    icon: EurIcon,
  },
  {
    currency: 'TRY',
    sign: '₺',
    icon: TryIcon,
  },
]

const WalletsPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllPosts())
  }, [])

  const wallets = useSelector((state) => state.allPosts.posts)
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  // setTimeout(() => {
  //   setOpen(false);
  // }, 3000);

  const [form, setForm] = useState({
    number: '',
    balance: 0,
    currency: '',
  })
  // console.log('===>form', form)

  const thisCurrency = currencies.filter(
    (currency) => form.currency === currency?.currency,
  )

  const handleChange = (e) => {
    setForm({
      ...form,
      ...thisCurrency[0],
      [e.target.name]: e.target.value,
    })
  }
  const handleClick = async () => {
    try {
      await axiosBack.post('/posts', form)
      await dispatch(getAllPosts())
      await handleOpen()
      //clear form
    } catch (e) {
      toast.error(e.response?.data?.message)
    }
  }
  const [inValidCurrency, setInValidCurrency] = useState(false)
  const [inValidWallet, setInValidWallet] = useState(false)

  useEffect(() => {
    const findCurrency = wallets?.find(
      (wallet) => wallet.currency === form.currency,
    )
    setInValidCurrency(findCurrency)

    const findWallet = wallets?.find(
      (wallet) => wallet.number === Number(form.number),
    )
    setInValidWallet(findWallet)
  }, [form])

  const renderWallets = wallets?.map(
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
    <div className={styles.page_layout}>
      <NavSidebar />
      <section className={styles.main}>
        <div className={styles.main__nav}>
          <p className={styles.main__title}>Кошельки</p>
        </div>

        {!wallets.length ? (
          <div className={styles.block}>
            <WalletIcon className={styles.svgIcon} />
            <p className={styles.text_title}>
              На данный момент у вас не <br /> создано ни одного кошелька
            </p>
          </div>
        ) : (
          ''
        )}
        {wallets.length > 3 ? (
          <div className={styles.wallets_block}>
            <WalletsSlider />
          </div>
        ) : (
          <div className={styles.wallets_block}>{renderWallets}</div>
        )}
        <div className={styles.profile_info}>
          <p className={styles.profile_title}>Добавление кошелька</p>

          <div className={styles.profile_inputs}>
            <MySelector
              name='currency'
              currencies={currencies}
              changed={form.currency}
              onChange={handleChange}
              error={inValidCurrency}
              helperText={
                inValidCurrency ? 'Кошелёк с такой валютой уже существует ' : ''
              }
            />
            <MyInput
              label='# Номер кошелька'
              name='number'
              onChange={handleChange}
              error={inValidWallet}
              helperText={
                inValidWallet ? 'Кошелёк с таким номером уже существует' : ''
              }
            />
            <div>
              <MyButton
                onClick={handleClick}
                size='large'
                variant='contained'
                disabled={inValidCurrency || inValidWallet}
              >
                Добавить кошелек
              </MyButton>
              <MyModal
                open={open}
                setOpen={setOpen}
                icon={<GreenWalletIcon />}
                title='Кошелек успешно добавлен'
                text='Теперь вы можете совершать любые операции.'
                onClose={handleClose}
              />
            </div>
          </div>
        </div>
        <ToastContainer limit={10} />
      </section>
      <ProfileSidebar />
    </div>
  )
}

export default WalletsPage
