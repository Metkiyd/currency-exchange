import React from 'react';
import styles from "../ExchangeRatePage/styles.module.scss";
import {MyButton} from "../../components/MyUI/MyButton";
import PlaylistAddCheckRoundedIcon from '@mui/icons-material/PlaylistAddCheckRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import SyncAltRoundedIcon from '@mui/icons-material/SyncAltRounded';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import noPhoto from "../../assets/images/noPhoto.png";
import {AddButton} from "../../components/MyUI/MyNavButton";
import {MySearch} from "../../components/MyUI/MySearch";
import {SlickSlider1} from "../../components/MyUI/SlickSlider1";

const ExchangeRatePage = () => {
  return (
    <div className={styles.page_layout}>
      <section className={styles.left_sidebar}>
        <div className={styles.left_sidebar__container}>
          <div className={styles.main_links}>
            <div className={styles.logo}>
              <p className={styles.logo__text_bold}>
                justice
              </p>
              <p className={styles.logo__text}>
                finance
              </p>
            </div>
            <MyButton
              size="mediumWithIcon" variant="text"
              startIcon={<LeaderboardOutlinedIcon/>}
            >Курсы валют</MyButton>
            <MyButton
              size="mediumWithIcon" variant="text"
              startIcon={<PersonOutlineOutlinedIcon/>}
            >Мой профиль</MyButton>
            <MyButton
              size="mediumWithIcon" variant="text"
              startIcon={<SyncAltRoundedIcon/>}
            >Обмен валют</MyButton>
            <MyButton
              size="mediumWithIcon" variant="text"
              startIcon={<WorkOutlineOutlinedIcon/>}
            >Кошельки</MyButton>
            <MyButton
              size="mediumWithIcon" variant="text"
              startIcon={<PlaylistAddCheckRoundedIcon/>}
            >Транзакции</MyButton>
          </div>
          <div>
            <div className={styles.line}></div>
            <div className={styles.leave_button}>
              <MyButton
                size="mediumWithIcon" variant="text"
                startIcon={<ExitToAppRoundedIcon/>}
              >Выход</MyButton>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className={styles.main__container}>
          <div className={styles.main__nav}>

            <p className={styles.main__title}>Курсы валют</p>
            <div className={styles.main__search_wrapper}>
              <MySearch fullWidth/>
            </div>

          </div>
          <SlickSlider1/>
          <div className={styles.currency}>
            <div className={styles.currency__title}>
              <p className={styles.currency__1}>
                USD / RUB • CURRENCY
              </p>
              <p className={styles.currency__2}>
                US Dollar/Russian Ruble</p>

            </div>


            <MyButton variant="contained">Обменять</MyButton>
          </div>

        </div>


      </section>


      <section className={styles.right_sidebar}>
        <div className={styles.right_sidebar__container}>
          <div className={styles.avatar}>

            <div className={styles.wrap}>
              <div className={styles.img1}>
                <img
                  alt="loginImage"
                  width="84"
                  height="84"
                  src={noPhoto}
                />
              </div>


              <div className={styles.img2}>
                <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M96 48C96 57.4935 93.1849 66.7738 87.9105 74.6674C82.6362 82.5609 75.1397 88.7132 66.3688 92.3462C57.5979 95.9792 47.9468 96.9298 38.6357 95.0777C29.3246 93.2256 20.7718 88.654 14.0589 81.9411C7.34595 75.2282 2.7744 66.6754 0.922306 57.3643C-0.929784 48.0532 0.0207761 38.4021 3.65378 29.6312C7.28679 20.8603 13.4391 13.3638 21.3326 8.08946C29.2262 2.81515 38.5065 -1.13209e-07 48 0V2.4C38.9812 2.4 30.1649 5.07439 22.666 10.085C15.1671 15.0956 9.32245 22.2173 5.87109 30.5496C2.41974 38.8819 1.51671 48.0506 3.27619 56.8961C5.03568 65.7417 9.37866 73.8668 15.7559 80.2441C22.1332 86.6213 30.2583 90.9643 39.1039 92.7238C47.9494 94.4833 57.1181 93.5803 65.4504 90.1289C73.7827 86.6776 80.9044 80.8329 85.915 73.334C90.9256 65.8351 93.6 57.0188 93.6 48H96Z"
                    fill="#363636"/>
                </svg>
              </div>
            </div>

            <p className={styles.text_500}>Алексей Иванов</p>
          </div>
          <div>
            <p className={styles.text_500}>Мой баланс</p>
            <div className={styles.add_wallet}>
              <p>Добавьте кошелек</p>
              <AddButton/>

            </div>
          </div>
          <div className={styles.transactions}>
            <p className={styles.text_500}>Последние транзакции</p>
            <div className={styles.transactions__wrapper}>
              <div className={styles.transactions__container}>
                <SyncAltRoundedIcon sx={{fontSize: '32px'}}/>
                <p className={styles.transactions__text}
                >Вы не совершили не одной транзакции</p>

              </div>

            </div>
          </div>
        </div>


      </section>
    </div>
  );
};

export default ExchangeRatePage;