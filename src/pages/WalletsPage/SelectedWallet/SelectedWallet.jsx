import React, { useEffect, useState } from 'react'
import { NavSidebar } from '../../../components/NavSidebar'
import { ProfileSidebar } from '../../../components/ProfileSidebar'
import styles from '../SelectedWallet/styles.module.scss'
import { MyInput } from '../../../components/MyUI/MyInput'
// import { MySelector } from '../../../components/MyUI/MySelector'
import { MyButton } from '../../../components/MyUI/MyButton'
import greenWallet from '../../../assets/images/greenWallet.png'
import landingBg from '../../../assets/images/landingBg.png'

import { MyModal } from '../../../components/MyUI/MyModal'
import { IconButton } from '@mui/material'
import { ReactComponent as GreenWalletIcon } from '../../../../src/assets/icons/greenWalletIcon.svg'
import { ReactComponent as GreenWalletIcon2 } from '../../../../src/assets/icons/greenWalletIcon2.svg'
import { ReactComponent as RubIcon } from '../../../../src/assets/icons/rubIcon.svg'
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import axiosBack from '../../../api/axiosBack'
import { useDispatch, useSelector } from 'react-redux'
import {
  getAllPosts,
  getDeleteWallet,
} from '../../../redux/actions/postsAction'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as yup from 'yup'
import {
  validationAddSum,
  validationSchemaLogin,
} from '../../../data/validation'
import { getUser } from '../../../redux/actions/authAction'
import { MyCheckbox } from '../../../components/MyUI/MyCheckbox'
import { Formik } from 'formik'
// import {wallets} from "../../../components/MyUI/Sliders/WalletsSlider/WalletsSlider";

const SelectedWallet = () => {
  const validationsSchema = yup.object().shape({ ...validationAddSum })
  const navigate = useNavigate()

  const { id } = useParams()
  // console.log('===>id', id)

  const dispatch = useDispatch()
  const fetchPosts = () => dispatch(getAllPosts())

  useEffect(() => {
    fetchPosts()
  }, [])

  const wallets = useSelector((state) => state.allPosts.posts)
  // console.log('=>wallets-DB', wallets)

  // const [data, setData] = useState()
  // console.log('===>data', data)

  // useEffect(() => {
  //   axiosBack.get(`/posts/${id}`)
  //     .then((response) => {
  //       setData(response.data)
  //     }).catch((err) => {
  //       console.warn(err);
  //       alert('cant get post')
  //   })
  //
  // }, [])

  let selectedWallet = wallets.find((wallet) => id == wallet.number) || null
  // console.log('===>selectedWallet', selectedWallet)

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () =>
    setOpen(
      false,
      // (open) => !open
    )

  const [form, setForm] = useState({})
  // console.log('===>form', form)
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const addSumWallet = (values) => {
    selectedWallet.balance = Number(selectedWallet.balance) + Number(values.sum)
  }
  const handleSubmit = async () => {
    try {
      await addSumWallet()

      const { data } = await axiosBack.patch(
        `/posts/${selectedWallet._id}`,
        selectedWallet,
      )
      await handleOpen()

      // handleOpen()
      // modal don't work with navigate

      // await navigate(`/wallets`)
      // OR
      // clean form
    } catch (e) {
      toast.error(e.response?.data?.message)
    }
  }

  const handleRemove = () => {
    try {
      console.log('=>id-hand-remove', selectedWallet._id)
      dispatch(getDeleteWallet(selectedWallet._id))
      // handleOpen()
      // modal don't work with navigate
      alert('deleted successfully')
      navigate(`/wallets`)
    } catch (e) {
      toast.error(e.response?.data?.message)
    }

    // toast('deleted successfully')

    // alert('deleted successfully')
    // navigate(`/wallets`)
  }
  // const handleSubmit = (values) => {
  //   // await dispatch(getUser(values))
  //   console.log('values', values)
  // }
  return (
    <div className={styles.page_layout}>
      <NavSidebar />
      <section className={styles.main}>
        <div className={styles.main__nav}>
          <div className={styles.main__title}>
            <IconButton aria-label='back' onClick={() => navigate(-1)}>
              <KeyboardBackspaceRoundedIcon />
            </IconButton>

            <p>{selectedWallet.currency}</p>
            <div>/</div>
            <p className={styles.id}>#{id}</p>
          </div>
          <MyButton variant='outlined' onClick={handleRemove}>
            Удалить кошелек
          </MyButton>
        </div>

        <div className={styles.block}>
          <div className={styles.card}>
            <div className={styles.country}>
              <p className={styles.rub}>{selectedWallet.currency}</p>
              <img src={selectedWallet.icon} alt={selectedWallet.currency} />
            </div>
            <p className={styles.count}>
              {selectedWallet.balance} {selectedWallet.sign}
            </p>
          </div>

          <div className={styles.landing}>
            <div>
              <p className={styles.obm1}>Обменивай с умом</p>
              <p className={styles.obm2}>До 10% кешбека с каждого обмена</p>
            </div>

            <img alt='greenWallet' width='84' height='98' src={greenWallet} />
            {/*<img*/}
            {/*  alt="landingBg"*/}
            {/*  width="84"*/}
            {/*  height="98"*/}
            {/*  src={landingBg}*/}
            {/*/>*/}
            <div className={styles.circle_small}></div>
          </div>
        </div>

        <div className={styles.profile_info}>
          <p className={styles.profile_title}>Пополнение</p>

          <div className={styles.password_inputs}>
            <Formik
              initialValues={{
                sum: '',
                cardNumber: '',
                expires: '',
                cvc: '',
                nameOnCard: '',
              }}
              validationSchema={validationsSchema}
              onSubmit={handleSubmit}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isValid,
                dirty,
              }) => (
                <>
                  <MyInput
                    value={values.sum}
                    label='Сумма'
                    name='sum'
                    error={errors.sum && touched.sum}
                    helperText={errors.sum && touched.sum ? errors.sum : ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <MyInput
                    value={values.cardNumber}
                    label='Номер карты'
                    name='cardNumber'
                    error={errors.cardNumber && touched.cardNumber}
                    helperText={
                      errors.cardNumber && touched.cardNumber
                        ? errors.cardNumber
                        : ''
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <MyInput
                    value={values.expires}
                    label='Даты'
                    name='expires'
                    error={errors.expires && touched.expires}
                    helperText={
                      errors.expires && touched.expires ? errors.expires : ''
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <MyInput
                    label='CVC'
                    value={values.cvc}
                    name='cvc'
                    error={errors.cvc && touched.cvc}
                    helperText={errors.cvc && touched.cvc ? errors.cvc : ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <MyInput
                    label='Владелец карты'
                    value={values.nameOnCard}
                    name='nameOnCard'
                    error={errors.nameOnCard && touched.nameOnCard}
                    helperText={
                      errors.nameOnCard && touched.nameOnCard
                        ? errors.nameOnCard
                        : ''
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <MyButton
                    size='large'
                    variant='contained'
                    onClick={handleSubmit}
                    disabled={!isValid || !dirty}
                  >
                    Пополнить кошелек
                  </MyButton>
                </>
              )}
            </Formik>

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
        </div>
      </section>
      <ProfileSidebar />
      <ToastContainer limit={10} />
    </div>
  )
}

export default SelectedWallet

// const [openModal, setOpenModal] = useState(false);

//
// const currentWallet: WalletsType | undefined = wallets.find(
//   (wallet) => `#${wallet.currency}` === location.hash
// );
//
// const deleteWallet = () => {
//   const newWallets =
//     currentWallet &&
//     wallets.filter((wallet) => wallet.currency !== currentWallet.currency);

//
//   navigate("/purse-page", {replace: true});
// };
//
// const sumWallet = Number(watch(`sum`))
//
// const addSumWallet = () => {
//   const newWalletStorage = wallets?.map((wallet) => {
//     if (wallet.currency === currentWallet?.currency)
//       wallet.sum = +Number(currentWallet?.sum) + +sumWallet;
//     setOpenModal(true);
//     reset({sum: '', cvc: '', cardNumber: '', cardOrder: '', date: ""})
//     return wallet;
//   });
//   updateWalletUser([...newWalletStorage])
// }
//
// const isValue = Boolean(errors.sum || errors.cvc || errors.date || errors.cardNumber || errors.cardOrder
//   ||
//   !watch(`sum`) || !watch(`cvc`) || !watch(`date`) || !watch(`cardNumber`) || !watch(`cardOrder`))
//
// return (
//   <main className={classes.main}>
//     <NavBar/>
//     <section className={classes.main_wrapper}>
//       <div className={classes.main_wrapper__title}>
//         <div className={classes.main_wrapper__title_purse_id}>
//           <NavLink to="/purse-page">
//             <img src={arrowBack} alt="Назад"/>
//           </NavLink>
//           <h1 className={classes.main_wrapper__title_text}>
//             {`${currentWallet?.currency}`}
//           </h1>
//           <span className={classes.main_wrapper__title_text_number}>
//               {`#${currentWallet?.purseNumber}`}
//             </span>
//         </div>
//         <ButtonMui
//           text="Удалить кошелёк"
//           padding="12px"
//           border="1px solid #363636"
//           bc="#FFFFFF"
//           hb="#FFFFFF"
//           coloring="#363636"
//           fontSize="12px"
//           fontWeight="600"
//           onClick={deleteWallet}
//         />
//       </div>
//       <div className={classes.main_wrapper__purse}>
//         {currentWallet?.currency && (
//           <Wallet
//             countryName={currentWallet.currency}
//             country={currentWallet?.currency}
//             count={currentWallet.sum?.toFixed(2)}
//             countryCounter={currentWallet?.currency}
//           />
//         )}
//         <div className={classes.image}>
//           <img src={banner} alt="баннер"/>
//         </div>
//       </div>
//       <div className={classes.main_wrapper__replenishment}>
//         <p className={classes.main_wrapper__replenishment_text}>Пополнение</p>
//         <form className={classes.main_wrapper__replenishment_wrapper} onSubmit={handleSubmit(onSubmit)}>
//           <div className={classes.input_error_wrapper}>
//             <div className={classes.error_wrapper}>
//               {errors.sum && (
//                 <p className={classes.error}>{errors.sum.message}</p>
//               )}
//             </div>
//
//             <input
//               placeholder="Сумма"
//               type="number"
//               {...register(`sum`, {...patterns.sum})}
//               className={classes[`${!errors.sum ? (`main_wrapper__replenishment_wrapper_input`) : (`main_wrapper__replenishment_wrapper_input_error`)}`]}
//             />
//           </div>
//
//           <div className={classes.input_error_wrapper}>
//             <div className={classes.error_wrapper}>
//               {errors.cardNumber && (
//                 <p className={classes.error}>{errors.cardNumber.message}</p>
//               )}
//             </div>
//             <input
//               {...register(`cardNumber`, {...patterns.cardNumber})}
//               placeholder="Номер карты"
//               type="number"
//               className={classes[`${!errors.cardNumber ? (`main_wrapper__replenishment_wrapper_input`) : (`main_wrapper__replenishment_wrapper_input_error`)}`]}
//             />
//           </div>
//           <div className={classes.input_error_wrapper}>
//             <div className={classes.error_wrapper}>
//               {errors.date && (
//                 <p className={classes.error}>{errors.date.message}</p>
//               )}
//             </div>
//
//             <input
//               {...register(`date`, {...patterns.date})}
//               placeholder="Даты"
//               className={classes[`${!errors.date ? (`main_wrapper__replenishment_wrapper_input`) : (`main_wrapper__replenishment_wrapper_input_error`)}`]}
//             />
//           </div>
//
//           <div className={classes.input_error_wrapper}>
//             <div className={classes.error_wrapper}>
//               {errors.cvc && (
//                 <p className={classes.error}>{errors.cvc.message}</p>
//               )}
//             </div>
//
//             <input
//               {...register('cvc', {...patterns.cvc})}
//               placeholder="CVC"
//               type="number"
//               className={classes[`${!errors.cvc ? (`main_wrapper__replenishment_wrapper_input`) : (`main_wrapper__replenishment_wrapper_input_error`)}`]}
//             />
//           </div>
//
//           <div className={classes.input_error_wrapper}>
//             <div className={classes.error_wrapper}>
//               {errors.cardOrder && (
//                 <p className={classes.error}>{errors.cardOrder.message}</p>
//               )}
//             </div>
//
//             <input
//               {...register(`cardOrder`, {...patterns.cardOrder})}
//               placeholder="Владелец карты"
//               type="text"
//               className={classes[`${!errors.cardOrder ? (`main_wrapper__replenishment_wrapper_input`) : (`main_wrapper__replenishment_wrapper_input_error`)}`]}
//             />
//           </div>
//           <ButtonMui
//             text="Пополнить кошелек"
//             padding="15px 24px"
//             bc="#363636"
//             disabled={isValue}
//             hb="#363636"
//             type='submit'
//             coloring="#FFFFFF"
//             fontSize="16px"
//             fontWeight="600"
//             onClick={addSumWallet}
//           />
//         </form>
//       </div>
//     </section>
//     <ProfileBar/>
//     {openModal && openModal && (
//       <Modal
//         setOpenModal={setOpenModal}
//         image={walletIconSum}
//         textMain="Пополнение прошло успешно"
//         textBottom="Вы успешно пополнили свой кошелек."
//       />
//     )}
//   </main>
// );
// };
