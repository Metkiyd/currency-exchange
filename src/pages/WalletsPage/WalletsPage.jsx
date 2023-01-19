import React, { useState, useEffect } from 'react'

import { NavLink } from 'react-router-dom'
import { IconButton } from '@mui/material'

import { NavSidebar } from '../../components/NavSidebar'
import { ProfileSidebar } from '../../components/ProfileSidebar'
import { MyInput } from '../../components/MyUI/MyInput'
import { MySelector } from '../../components/MyUI/MySelector'
import { MyButton } from '../../components/MyUI/MyButton'
import { MyModal } from '../../components/MyUI/MyModal'
import { CurrencySlider } from '../../components/MyUI/Sliders/CurrencySlider'
import { WalletsSlider } from '../../components/MyUI/Sliders/WalletsSlider'

import styles from '../WalletsPage/styles.module.scss'

import { ReactComponent as WalletIcon } from '../../assets/icons/walletIcon.svg'
import { ReactComponent as GreenWalletIcon } from '../../../src/assets/icons/greenWalletIcon.svg'
import { ReactComponent as GreenWalletIcon2 } from '../../../src/assets/icons/greenWalletIcon2.svg'
import RubIcon from '../../assets/icons/rubIcon.svg'
import UsdIcon from '../../assets/icons/usdIcon.svg'
import EurIcon from '../../assets/icons/eurIcon.svg'
import CnyIcon from '../../assets/icons/cnyIcon.svg'
import TryIcon from '../../assets/icons/tryIcon.svg'
import axios from '../../api/axiosBack'
import { useDispatch, useSelector } from 'react-redux'
import axiosBack from '../../api/axiosBack'
import { getAllPosts } from '../../redux/actions/postsAction'
import { toast, ToastContainer } from 'react-toastify'

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
  const fetchPosts = () => dispatch(getAllPosts())

  useEffect(() => {
    // fetchPosts()
  }, [])

  const wallets = useSelector((state) => state.allPosts.posts)

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [form, setForm] = useState({
    number: '',
    balance: 0,
    currency: '',
    // valuteId: '',
  })
  // console.log('===>form', form)

  const thisCurrency = currencies.filter(
    (currency) => form.currency === currency?.currency,
  )
  // console.log('===>thisCurrency', ...thisCurrency)

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
      await fetchPosts()
      await handleOpen()
      //clear form

      // await toast('added successfully')
      // await alert('added successfully')
    } catch (e) {
      toast.error(e.response?.data?.message)
    }
  }

  return (
    <div className={styles.page_layout}>
      <NavSidebar />
      <section className={styles.main}>
        <div className={styles.main__nav}>
          <p className={styles.main__title}>Кошельки</p>
        </div>

        {wallets.length ? (
          <div className={styles.block}>
            <WalletsSlider />
          </div>
        ) : (
          <div className={styles.block}>
            <WalletIcon className={styles.svgIcon} />
            <p className={styles.text_title}>
              На данный момент у вас не <br /> создано ни одного кошелька
            </p>
          </div>
        )}
        <div className={styles.profile_info}>
          <p className={styles.profile_title}>Добавление кошелька</p>

          <div className={styles.profile_inputs}>
            <MySelector
              sx={{ width: 388 }}
              name='currency'
              currencies={currencies}
              changed={form.currency}
              onChange={handleChange}
            />
            <MyInput
              label='# Номер кошелька'
              sx={{ width: 388 }}
              name='number'
              onChange={handleChange}
            />
            <div>
              <MyButton
                // onClick={handleOpen}
                onClick={handleClick}
                // onSubmit={handleClick}
                size='large'
                variant='contained'
                // disabled
              >
                Добавить кошелек
              </MyButton>

              <MyModal
                // setModalOpen={setOpen} modalState={open}

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
      </section>
      <ProfileSidebar />
      <ToastContainer limit={10} />
    </div>
  )
}

export default WalletsPage

//
// const newArrayCountry = countryIcon.filter(country => !wallets.find(wal => wal.currency === country?.currency))
//
// useEffect(() => {
//   if (newArrayCountry.length === 0) {
//     setIsDisabledSelect(true)
//     setIsDisabledBtn(true)
//   } else {
//     setIsDisabledSelect(false)
//   }
// }, [newArrayCountry])
//
// useEffect(() => {
//   if (!numberPurse || !currency) {
//     setIsDisabledBtn(true);
//   } else {
//     setIsDisabledBtn(false);
//   }
// }, [numberPurse, currency]);

// const addPurse = () => {
//   const isFindWallet = wallets?.find(
//     (wallet) => wallet.currency === currency
//   );
//   if (isFindWallet) {
//     setModalErrorIsOpen(true);
//   } else {
//     setOpenModal(true);

//     const newWallet: CreateWalletType[] = [
//       ...wallets,
//       {
//         currency,
//         purseNumber: numberPurse,
//         sum: 0,
//       },
//     ]
//     createWalletUser(newWallet)
//     setTimeout(() => {
//       FetchWallets()
//     }, 100)
//
//
//     setNumberPurse(0)
//   }
// };
// useEffect(() => {
//   if (modalIsOpen) {
//     setTimeout(() => {
//       setIsOpen(false);
//     }, 3000);
//   }
// }, [modalIsOpen]);
//
// useEffect(() => {
//   if (modalErrorIsOpen) {
//     setTimeout(() => {
//       setModalErrorIsOpen(false);
//     }, 3000);
//   }
// });
//
// const handleChange = (event: SelectChangeEvent<CurrencyType>) => {
//   setCurrency(event.target.value as CurrencyType);
// };
//
// const walletLink = (wallet: WalletsType) => {
//   navigate(`/purse-info-page/#${wallet.currency}`, {replace: true});
// };
//
// return (
//   <main className={classes.main}>
//     <NavBar/>
//     <section className={classes.main__wrapper}>
//       <div className={classes.main__wrapper__title}>
//         <h1 className={classes.main__wrapper__title_text}>Кошельки</h1>
//       </div>
//
//       {wallets.length > 0 ? (
//         <>
//           <div className={classes.main__wrapper__wallet_container__wallets_desktop}>
//             <div className={classes.slider}>
//               <div style={{
//                 transform: `translateX(${x}px)`,
//                 display: "flex",
//                 transition: "0.5s",
//                 gap: "17px",
//               }}>
//                 {wallets.map((wallet, index) => (
//                   <Wallet
//                     pointer={true}
//                     key={index}
//                     countryName={wallet.currency}
//                     country={wallet.currency}
//                     count={wallet.sum?.toFixed(2)}
//                     countryCounter={wallet.currency}
//                     onClick={() => walletLink(wallet)}
//                   />
//                 ))}
//               </div>
//             </div>
//             {wallets.length > 3 && (
//               <div className={classes.slider__button}>
//                 <img src={arrowLeftSlide} onClick={moveBlockRight} alt=''/>
//                 <img src={arrowRightSlide} onClick={moveBlockLeft} alt=''/>
//               </div>
//             )}
//           </div>
//           <div className={classes.main__wrapper__wallet_container__wallets_mobile}>
//             <img src={arrowRightSlide} onClick={moveBlockLeftMobile} alt=''/>
//
//             <div className={classes.slider_mobile}>
//               <div style={{
//                 transform: `translateX(${xMobile}px)`,
//                 display: "flex",
//                 transition: "0.5s",
//                 gap: "12px",
//               }}>
//
//                 {wallets.map((wallet, index) => (
//                   <Wallet
//                     pointer={true}
//                     key={index}
//                     countryName={wallet.currency}
//                     country={wallet.currency}
//                     count={wallet.sum?.toFixed(2)}
//                     countryCounter={wallet.currency}
//                     onClick={() => walletLink(wallet)}
//                   />
//                 ))}
//               </div>
//             </div>
//
//             <img src={arrowLeftSlide} onClick={moveBlockRightMobile} alt=''/>
//           </div>
//         </>
//       ) : (
//         <div className={classes.main__wrapper__wallet_container}>
//           <img src={wallet} alt="Кошелек"/>
//           <p className={classes.main__wrapper__title_wallet}>
//             На данный момент у вас не созданно ни одного кошелька
//           </p>
//         </div>
//       )}
//
//       <div className={classes.main__wrapper__wallet_container__add}>
//         <div className={classes.main__wrapper__wallet_container__add_title}>
//           <p className={classes.main__wrapper__wallet_container__add_title_text}>Добавление кошелька</p>
//           {newArrayCountry.length === 0 && (
//             <>
//               <p className={classes.select_limit}>Достигнут лимит количества кошельков</p>
//             </>
//           )}
//         </div>
//         <div className={classes.main__wrapper__wallet_container__add__select}>
//           <div className={classes.desktop_button}>
//             <Select
//               handleChangeSelect={handleChange}
//               selectValue={currency}
//               minWidth="388px"
//               name="Выберите валюту"
//               array={newArrayCountry}
//               disabled={isDisabledSelect}
//             />
//           </div>
//           <div className={classes.mobile_button}>
//             <Select
//               handleChangeSelect={handleChange}
//               selectValue={currency}
//               minWidth="250px"
//               name="Выберите валюту"
//               array={newArrayCountry}
//               disabled={isDisabledSelect}
//
//             />
//           </div>
//           <Input
//             placeholder="# Номер кошелька"
//             type="number"
//             className={
//               classes.main__wrapper__wallet_container__add__select_input
//             }
//             value={numberPurse}
//             onChange={(e) => {
//               setNumberPurse(e.target.valueAsNumber);
//             }}
//           />
//           <ButtonMui
//             text="Добавить кошелек"
//             bc="#363636"
//             padding="15px 24px"
//             disabled={isDisabledBtn}
//             coloring="#EEEEEE"
//             fontSize="16px"
//             fontWeight="600"
//             hb="#363636"
//             onClick={addPurse}
//           />
//         </div>
//       </div>
//     </section>
//     <ProfileBar/>
//     {openModal && openModal && (
//       <Modal
//         setOpenModal={setOpenModal}
//         image={WalletsIcon}
//         textMain="Кошелек успешно добавлен"
//         textBottom="Теперь вы можете совершать любые операции."
//       />
//     )}
//   </main>
// );
// };
