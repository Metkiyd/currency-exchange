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
import { validationAddSum } from '../../../data/validation'
import { getUser } from '../../../redux/actions/authAction'
import { MyCheckbox } from '../../../components/MyUI/MyCheckbox'
import { Formik } from 'formik'
import { WalletCard } from '../../../components/WalletCard'
// import {wallets} from "../../../components/MyUI/Sliders/WalletsSlider/WalletsSlider";

const SelectedWallet = () => {
  const validationsSchema = yup.object().shape({ ...validationAddSum })
  const navigate = useNavigate()

  const { id } = useParams()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllPosts())
  }, [])

  const wallets = useSelector((state) => state.allPosts.posts)

  let selectedWallet = wallets.find((wallet) => id == wallet.number) || null
  // console.log('===>selectedWallet', selectedWallet)

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleRemove = () => {
    try {
      console.log('=>id-hand-remove', selectedWallet._id)
      dispatch(getDeleteWallet(selectedWallet._id))
      alert('deleted successfully')
      navigate(`/wallets`)
    } catch (e) {
      toast.error(e.response?.data?.message)
    }
  }
  const handleSubmit = async (values, actions) => {
    try {
      await (selectedWallet.balance =
        Number(selectedWallet.balance) + Number(values.sum))

      const { data } = await axiosBack.patch(
        `/posts/${selectedWallet._id}`,
        selectedWallet,
      )
      await handleOpen()
      await actions.resetForm()
    } catch (e) {
      toast.error(e.response?.data?.message)
    }
  }
  return (
    <div className={styles.page_layout}>
      <NavSidebar />
      <section className={styles.main}>
        <div className={styles.main__nav}>
          <div className={styles.main__title}>
            <IconButton aria-label='back' onClick={() => navigate(`/wallets`)}>
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
          {/*<div className={styles.card}>*/}
          {/*  <div className={styles.country}>*/}
          {/*    <p className={styles.rub}>{selectedWallet.currency}</p>*/}
          {/*    <img src={selectedWallet.icon} alt={selectedWallet.currency} />*/}
          {/*  </div>*/}
          {/*  <p className={styles.count}>*/}
          {/*    {selectedWallet.balance} {selectedWallet.sign}*/}
          {/*  </p>*/}
          {/*</div>*/}
          <WalletCard
            currency={selectedWallet.currency}
            icon={selectedWallet.icon}
            balance={selectedWallet.balance}
            sign={selectedWallet.sign}
          />

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
