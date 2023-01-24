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
    sendFromWallet.balance = Number(sendFromWallet.balance) - Number(send)
    sendToWallet.balance = Number(sendToWallet.balance) + Number(received)
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

// const [form, setForm] = useState({
//   // giveValue: 0,
//   // getValue: 0,
//   give: 0,
//   get: 0,
//   giveWallet: "",
//   getWallet: "",
//   // currency: '',
//   // wallet: ""
//   // sign: '',
//   // icon: null
// })
// console.log('===>form', form)

// const handleChange = (e) => {
//   setForm({
//     ...form,
//     [e.target.name]: e.target.value
//   })
// }

// const [give, setGive] = useState<CurrencyType>();
// const [get, setGet] = useState<CurrencyType>();

// const [giveValue, setGiveValue] = useState<number>();
// const [getValue, setGetValue] = useState<number>();

// const [isDisabled, setIsDisabled] = useState<boolean>(true);
// const [isDisabledSelect, setIsDisabledSelect] = useState<boolean>(true)
// const {FetchExchangeRates} = useActions();
// const exchangeRates: exchangeRates = useTypedSelector((state) => state.exchangeRates);
// const {users} = useTypedSelector((state) => state.user);
// const {wallets} = useTypedSelector((state) => state.wallets);
// const {FetchWallets, FetchUser, transactionUser, updateWalletUser} = useActions();
// const Data = new Date();
// const Hour = Data.getHours();
// const Minutes = Data.getMinutes();
//
// const giveWallets = wallets.filter(wallet => wallet.currency !== get)
//
// const getWallets = wallets.filter(wallet => wallet.currency !== give)
//
// useEffect(() => {
//   giveWallets.length && getWallets.length ? setIsDisabledSelect(false) : setIsDisabledSelect(true)
//
// }, [])
//
// useEffect(() => {
//   if (get === give && get?.length && give?.length) {
//   } else {
//   }
// }, [get, give]);

// const addTransaction = () => {
//   const refreshWalletSum = wallets.map((item) => {
//     if (item.currency === give) {
//       return {
//         ...item,
//         sum: item.sum - Number(giveValue),
//       };
//     }
//     if (item.currency === get) {
//       return {
//         ...item,
//         sum: item.sum + +Number(getValue),
//       };
//     }
//     return item;
//   });
//
//   setOpenModal(true);
//   setIsDisabled(true);
//   updateWalletUser([...refreshWalletSum])
//   setTimeout(() => {
//     FetchWallets()
//   }, 100)
//
//   const newTransaction: TransactionType[] = [
//     ...users[0].transaction,
//     {
//       get,
//       Hour,
//       Minutes,
//       give,
//       giveValue,
//       getValue,
//     },
//   ]
//   transactionUser(newTransaction)
//   setTimeout(() => {
//     FetchUser()
//   }, 100)
//   setGiveValue(0);
// };
//
// useEffect(() => {
//   FetchExchangeRates()
// }, []);
//
// useEffect(() => {
//   const walletGive = wallets?.filter(
//     (wallet) => wallet.currency === give && wallet
//   );
//   walletGive.length &&
//   (Number(giveValue) > walletGive[0].sum ||
//   Boolean(!get) ||
//   Boolean(!give) ||
//   Boolean(!giveValue)
//     ? setIsDisabled(true)
//     : setIsDisabled(false));
//
//   exchangeRates.map((input: { currencyName: CurrencyType; rubleRatio: string | null; }) => {
//     walletGive.length &&
//     walletGive[0].currency === input.currencyName &&
//     exchangeRates?.map((output: { currencyName: CurrencyType; rubleRatio: string | null; }) => {
//       get === output.currencyName &&
//       setGetValue(
//         Number(
//           (
//             (Number(input.rubleRatio) * Number(giveValue)) /
//             Number(output.rubleRatio)
//           ).toFixed(2)
//         )
//       );
//     });
//   });
// }, [giveValue, getValue, get, give, isDisabled]);
//
// return (
//   <main className={classes.main}>
//     <NavBar/>
//     <section className={classes.main__wrapper}>
//       <div className={classes.main__wrapper__title}>
//         <h1 className={classes.main__wrapper__title_text}>Обмен валют</h1>
//       </div>
//       <div className={classes.main__wrapper__content}>
//         <div className={classes.main__wrapper__content__title__info}>
//           <p>Укажите кошелек, сумму и валюту для обмена</p>
//         </div>
//         <div className={classes.main__wrapper__content__exchange}>
//           <Input
//             placeholder="Отдаю"
//             type="number"
//             className={classes.main__wrapper__content__exchange__input}
//             onChange={(e) => setGiveValue(e.target.valueAsNumber)}
//             value={giveValue}
//           />
//           {wallets ? (
//             <Select
//               handleChangeSelect={(event) => setGive(event.target.value as CurrencyType)}
//               selectValue={give}
//               minWidth="21rem"
//               name="Выберите кошелек"
//               array={giveWallets}
//               disabled={isDisabledSelect}
//             />
//           ) : (
//             <h1>LoAdInG...</h1>
//           )}
//         </div>
//         <div className={classes.main__wrapper__content__exchange}>
//           <Input
//             placeholder="Получаю"
//             type="number"
//             className={classes.main__wrapper__content__exchange__input}
//             onChange={(e) => setGetValue(e.target.valueAsNumber)}
//             value={getValue}
//             readOnly={true}
//           />
//           {wallets ? (
//             <Select
//               handleChangeSelect={(event) =>
//                 setGet(event.target.value as CurrencyType)
//               }
//               selectValue={get}
//               minWidth="21rem"
//               name="Выберите кошелек"
//               array={getWallets}
//               disabled={isDisabledSelect}
//
//             />
//           ) : (
//             <h1>LoAdInG...</h1>
//           )}
//         </div>
//         <div className={classes.main__wrapper__content__exchange}>
//
//           <ButtonMui
//             text="Обменять"
//             icon={exchange}
//             bc="#363636"
//             padding="16px"
//             gap="8px"
//             coloring="#FFFFFF"
//             fontWeight="600"
//             fontSize="16px"
//             hb="#363636"
//             disabled={isDisabled}
//             direction="row-reverse"
//             onClick={addTransaction}
//           />
//
//         </div>
//       </div>
//     </section>
//     <ProfileBar/>
//     {openModal && openModal && (
//       <Modal
//         setOpenModal={setOpenModal}
//         image={exchangeRatesIcon}
//         textMain="Успешно"
//         textBottom="Вы успешно обменяли валюту по актуальному курсу"
//       />
//     )}
//   </main>
// );
// };
