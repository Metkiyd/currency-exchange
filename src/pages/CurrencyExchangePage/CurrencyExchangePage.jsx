import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import axiosBack from '../../api/axiosBack'

import { NavSidebar } from '../../components/NavSidebar'
import { ProfileSidebar } from '../../components/ProfileSidebar'
import { WalletSelector } from '../../components/MyUI/MySelector'
import { MyButton } from '../../components/MyUI/MyButton'

import { getAllPosts } from '../../redux/actions/postsAction'
import { getTransactions } from '../../redux/actions/transactionsAction'

import CachedRoundedIcon from '@mui/icons-material/CachedRounded'
import { ReactComponent as GreenWalletIcon2 } from '../../../src/assets/icons/greenWalletIcon2.svg'
import styles from '../CurrencyExchangePage/styles.module.scss'
import { MyModal } from '../../components/MyUI/MyModal'

const CurrencyExchangePage = () => {
  const dispatch = useDispatch()

  const fetchPosts = () => dispatch(getAllPosts())
  const fetchTransactions = () => dispatch(getTransactions())
  useEffect(() => {
    // fetchPosts()
  }, [])

  const wallets = useSelector((state) => state.allPosts.posts)

  // console.log('=>wallets-DB', wallets)
  const [rates, setRates] = useState([])
  // console.log('=>ratesState', rates)

  useEffect(() => {
    axios.get(`https://www.cbr-xml-daily.ru/latest.js`).then(({ data }) => {
      const ratesData = data.rates
      console.log('=>ratesData', ratesData)
      setRates({
        ...rates,
        ...ratesData,
        RUB: 1,
      })
    })
  }, [])

  const [send, setSend] = useState('') //give

  // console.log('=>send', send)
  const [received, setReceived] = useState('') //get
  // console.log('=>received', received)
  const [from, setCurrencyFrom] = useState('') //giveWallet
  // console.log('=>from', from)
  const [to, setCurrencyTo] = useState('') // getWallet
  // console.log('=>to', to)
  const newTransaction = {
    send,
    received,
    from,
    to,
  }

  function format(number) {
    return number.toFixed(2)
  }

  function handleSendChange(send) {
    setReceived(format((send * rates[to]) / rates[from]))
    setSend(send)
  }

  function handleFromChange(from) {
    setReceived(format((send * rates[to]) / rates[from]))
    setCurrencyFrom(from)
  }

  function handleReceivedChange(received) {
    setSend(format((received * rates[from]) / rates[to]))
    setReceived(received)
  }

  function handleToChange(to) {
    setSend(format((received * rates[from]) / rates[to]))
    setCurrencyTo(to)
  }

  // console.log('=>getWallet', wallets.getWallet)
  // console.log('=>giveWallet', wallets.giveWallet)
  let sendFromWallet = wallets.find((wallet) => from == wallet.currency) || null

  // console.log('=>sendFromWallet', sendFromWallet)
  let sendToWallet = wallets.find((wallet) => to == wallet.currency) || null
  // console.log('=>sendToWallet', sendToWallet)
  const makeCalc = () => {
    sendFromWallet.balance = format(
      Number(sendFromWallet.balance) - Number(send),
    )
    sendToWallet.balance = format(
      Number(sendToWallet.balance) + Number(received),
    )
  }

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleClick = async () => {
    await makeCalc()

    await axiosBack.patch(`/posts/${sendFromWallet._id}`, sendFromWallet)
    await axiosBack.patch(`/posts/${sendToWallet._id}`, sendToWallet)

    await axiosBack.post('/transactions', newTransaction)
    // console.log('=>dispatch-handleCreate', data)
    //clear form
    // alert('exchanged successfully')
    await fetchTransactions()
    await fetchPosts()
    await handleOpen()
  }

  return (
    <div className={styles.page_layout}>
      <NavSidebar />
      <section className={styles.main}>
        <div className={styles.main__nav}>
          <p className={styles.main__title}>Обмен валют</p>
        </div>
        <div className={styles.profile_info}>
          <p className={styles.profile_title}>
            Укажите кошелек, сумму и валюту для обмена
          </p>
          <div className={styles.profile_inputs}>
            <WalletSelector
              labelname={'Отдаю'}
              // balance={balance}
              amount={send}
              currency={from}
              onAmountChange={handleSendChange}
              onCurrencyChange={handleFromChange}
            />
          </div>
          <div className={styles.profile_inputs}>
            <WalletSelector
              labelname={'Получаю'}
              // name='getWallet'
              amount={received}
              currency={to}
              onAmountChange={handleReceivedChange}
              onCurrencyChange={handleToChange}
            />
          </div>
          <MyButton
            size='largeWithIcon'
            variant='contained'
            endIcon={<CachedRoundedIcon />}
            onClick={handleClick}
          >
            Обменять
          </MyButton>
          <MyModal
            // setModalOpen={setOpen} modalState={open}

            open={open}
            setOpen={setOpen}
            icon={<GreenWalletIcon2 />}
            title='Пополнение прошло успешно'
            text='Вы успешно пополнили свой кошелек.'
            onClose={handleClose}
          />
        </div>
      </section>
      <ProfileSidebar />
    </div>
  )
}

export default CurrencyExchangePage
