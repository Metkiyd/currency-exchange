import React, {useState} from 'react';
import {NavSidebar} from "../../components/NavSidebar";
import {ProfileSidebar} from "../../components/ProfileSidebar";
import styles from "../WalletsPage/styles.module.scss";
import {MyInput} from "../../components/MyUI/MyInput";
import {MySelector} from "../../components/MyUI/MySelector";
import {MyButton} from "../../components/MyUI/MyButton";
import {ReactComponent as WalletIcon} from '../../assets/icons/walletIcon.svg';
import {MyModal} from "../../components/MyUI/MyModal";
import {IconButton} from "@mui/material";
import {ReactComponent as GreenWalletIcon} from '../../../src/assets/icons/greenWalletIcon.svg';
import {ReactComponent as GreenWalletIcon2} from '../../../src/assets/icons/greenWalletIcon2.svg';
import {NavLink} from "react-router-dom";
import {SlickSlider1} from "../../components/MyUI/SlickSlider1";
import {WalletsSlider} from "../../components/MyUI/Sliders/WalletsSlider";


const wallets = JSON.parse(localStorage.getItem('wallets')) || []
// console.log('===>wallets', wallets)

const WalletsPage = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const [form, setForm] = useState({
    currency: '',
    id: '',
  })
  console.log('===>form', form)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = (e) => {

    alert('popolnen successfully')

    wallets.push(form)
    localStorage.setItem("wallets", JSON.stringify(wallets))
  }

  return (
    <div className={styles.page_layout}>
      <NavSidebar/>
      <section className={styles.main}>
        <div className={styles.main__nav}>
          <p className={styles.main__title}>Кошельки</p>
        </div>

        {/*<div className={styles.block}>*/}
        {/*  <NavLink to={'/selected-wallet'} >*/}
        {/*    <WalletIcon className={styles.svgIcon} />*/}
        {/*  </NavLink>*/}

        {/*  <p className={styles.text_title}>*/}
        {/*    На данный момент у вас не <br/> создано ни одного кошелька*/}
        {/*  </p>*/}
        {/*</div>*/}
        <div className={styles.block}>

          <WalletsSlider/>

        </div>







        <div className={styles.profile_info}>
          <p className={styles.profile_title}>Добавление кошелька</p>

          <div className={styles.profile_inputs}>
            <MySelector
              sx={{width: 388}}
              name="currency"
              // onChange={handleChange}
            />
            <MyInput
              label="# Номер кошелька"
              sx={{width: 388}}
              name="id"
              onChange={handleChange}

            />
            <div>
              <MyButton
                // onClick={handleOpen}
                onClick={handleClick}
                // onSubmit={handleClick}
                size="large"
                variant="contained"
                // disabled
              >Добавить кошелек
              </MyButton>

              <MyModal
                // setModalOpen={setOpen} modalState={open}

                open={open}
                setOpen={setOpen}
                icon={<GreenWalletIcon/>}
                title="Кошелек успешно добавлен"
                text="Теперь вы можете совершать любые операции."
                onClose={handleClose}
              />

            </div>


          </div>



        </div>


      </section>
      <ProfileSidebar/>
    </div>
  );
};

export default WalletsPage;