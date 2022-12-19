import React from 'react';
import styles from "../NavSidebar/styles.module.scss";
import {MyButton} from "../MyUI/MyButton";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SyncAltRoundedIcon from "@mui/icons-material/SyncAltRounded";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import PlaylistAddCheckRoundedIcon from "@mui/icons-material/PlaylistAddCheckRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";

const NavSidebar = () => {
  return (
    <section className={styles.sidebar}>
      <div className={styles.sidebar__container}>
        <div className={styles.sidebar__links}>
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
          <div className={styles.sidebar__line}></div>
          <div className={styles.sidebar__leave_button}>
            <MyButton
              size="mediumWithIcon" variant="text"
              startIcon={<ExitToAppRoundedIcon/>}
            >Выход</MyButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavSidebar;