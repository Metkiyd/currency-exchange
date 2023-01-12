import React, {useEffect, useState} from 'react';
import {NavSidebar} from "../../../components/NavSidebar";
import {ProfileSidebar} from "../../../components/ProfileSidebar";
import styles from "../SelectedWallet/styles.module.scss";
import {MyInput} from "../../../components/MyUI/MyInput";
import {MySelector} from "../../../components/MyUI/MySelector";
import {MyButton} from "../../../components/MyUI/MyButton";
import greenWallet from "../../../assets/images/greenWallet.png"
import landingBg from "../../../assets/images/landingBg.png"

import {MyModal} from "../../../components/MyUI/MyModal";
import {IconButton} from "@mui/material";
import {ReactComponent as GreenWalletIcon} from '../../../../src/assets/icons/greenWalletIcon.svg';
import {ReactComponent as GreenWalletIcon2} from '../../../../src/assets/icons/greenWalletIcon2.svg';
import {ReactComponent as RubIcon} from '../../../../src/assets/icons/rubIcon.svg';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import {useNavigate, useParams, useLocation} from "react-router-dom";
import axiosBack from "../../../api/axiosBack";
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts, getDeleteWallet } from '../../../redux/actions/postsAction'
// import {wallets} from "../../../components/MyUI/Sliders/WalletsSlider/WalletsSlider";


const SelectedWallet = () => {
  const navigate = useNavigate();

  const {id} = useParams()
  // console.log('===>id', id)

  const dispatch = useDispatch()
  const fetchPosts = () => dispatch(getAllPosts());

  useEffect(() => {
    fetchPosts();
  }, [])

  const wallets = useSelector((state) => state.allPosts.posts);
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

  let selectedWallet = wallets.find(wallet => id == wallet.number) || null
  console.log('===>selectedWallet', selectedWallet)

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(open => !open);

  const [form, setForm] = useState({})
  // console.log('===>form', form)
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })

  }

  const [balance, setBalance] = useState(selectedWallet.balance) || null;

  console.log("==> selected balance", balance)
  const addSumWallet = () => {

    setBalance(selectedWallet.balance = Number(selectedWallet.balance) + Number(form.balance))
    // console.log('===>sum select + form', addSumWallet)
  }

  const handleClick = async () => {

    await addSumWallet()
    await console.log('=>form', form)
    await console.log('=>balance', balance)

    const { data } = await axiosBack.patch(`/posts/${selectedWallet._id}`, balance)
    await console.log('=>dispatch-handleFillUp', data)

    alert('fill up successfully')

  }

  const handleRemove = () => {
    console.log('=>id-hand-remove', selectedWallet._id)
    dispatch(getDeleteWallet(selectedWallet._id))

    // let removedWallets =
    //   wallets.filter(wallet => wallet.id !== selectedWallet.id)
    // console.log('===>removed wallets', removedWallets)
    // console.log('===>wallets', wallets)


    alert('deleted successfully')
    navigate(`/wallets`)

  }

  // const removeWallet = () => {
  // localStorage.setItem("wallets", JSON.stringify(removed));
  // navigate(`/wallets`, {replace: true})
  // }

  return (
    <div className={styles.page_layout}>
      <NavSidebar/>
      <section className={styles.main}>
        <div className={styles.main__nav}>

          <div className={styles.main__title}>
            <IconButton
              aria-label="back"
              onClick={() => navigate(-1)}>
              <KeyboardBackspaceRoundedIcon/>
            </IconButton>

            <p>
              {selectedWallet.currency}
            </p>
            <div>/</div>
            <p className={styles.id}>#{id}</p>
          </div>
          <MyButton
            variant="outlined"
            onClick={handleRemove}
          >Удалить кошелек</MyButton>
        </div>

        <div className={styles.block}>

          <div className={styles.card}>
            <div className={styles.country}>
              <p className={styles.rub}>
                {selectedWallet.currency}
              </p>
              <img src={selectedWallet.icon} alt={selectedWallet.currency}/>
            </div>
            <p className={styles.count}>
              {selectedWallet.balance} {selectedWallet.sign}
            </p>
          </div>


          <div className={styles.landing}>
            <div>
              <p className={styles.obm1}>
                Обменивай с умом
              </p>
              <p className={styles.obm2}>
                До 10% кешбека с каждого обмена
              </p>
            </div>

            <img
              alt="greenWallet"
              width="84"
              height="98"
              src={greenWallet}
            />
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
            <MyInput
              label="Сумма"
              sx={{width: 388}}
              name="balance"
              type="Number"
              onChange={handleChange}
            />
            <MyInput
              label="Номер карты"
              sx={{width: 388}}
            />
            <MyInput
              label="Даты"
              sx={{width: 388}}
            />
            <MyInput
              label="CVC"
              sx={{width: 388}}
            />
            <MyInput
              label="Владелец карты"
              sx={{width: 388}}
            />

            <MyButton
              // onClick={handleOpen}
              onClick={handleClick}
              size="large"
              variant="contained"
              // disabled
            >Пополнить кошелек
            </MyButton>
            <MyModal
              // setModalOpen={setOpen} modalState={open}

              open={open}
              setOpen={setOpen}
              icon={<GreenWalletIcon2/>}
              title="Пополнение прошло успешно"
              text="Вы успешно пополнили свой кошелек."
              onClose={handleClose}
            />
          </div>


        </div>


      </section>
      <ProfileSidebar/>
    </div>
  );
};

export default SelectedWallet;


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
