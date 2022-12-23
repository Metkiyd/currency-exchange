import React from 'react';
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
import {useNavigate} from "react-router-dom";
// import {wallets} from "../../../components/MyUI/Sliders/WalletsSlider/WalletsSlider";

const wallets = JSON.parse(localStorage.getItem('wallets')) || []
console.log('===>wallets', wallets)


const SelectedWallet = () => {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(open => !open);

  const { id, balance, currency, sign, icon } = wallets;

  //   : '10 000, 00',
  //   : 'RUB',
  //   : '₽',
  //   : <RubIcon/>

  // const handleLogin = () => {
  //   const loggedUser = JSON.parse(localStorage.getItem("Users"))
  //   const currentUser = loggedUser.find(user => form.Email === user.Email)
  //
  //   if (form.Email === currentUser.Email && form.Password === currentUser.Password) {
  //     localStorage.setItem("authorized", true)
  //     localStorage.setItem("currentUser", JSON.stringify(currentUser))
  //
  //
  //   } else {
  //     alert('Wrong Email or Password')
  //   }
  //
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
              {currency}
            </p>
            <div>/</div>
            <p className={styles.id}>#{id}</p>
          </div>
          <MyButton
            variant="outlined"
          >Удалить кошелек</MyButton>
        </div>

        <div className={styles.block}>


          <div className={styles.card}>
            <div className={styles.country}>
              <p className={styles.rub}>
                RUB
              </p>
              <RubIcon/>
            </div>
            <p className={styles.count}>
              120 000, 00 ₽
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
              onClick={handleOpen}
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