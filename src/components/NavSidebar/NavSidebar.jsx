import React from 'react';
import styles from "../NavSidebar/styles.module.scss";
import {MyButton} from "../MyUI/MyButton";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SyncAltRoundedIcon from "@mui/icons-material/SyncAltRounded";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import PlaylistAddCheckRoundedIcon from "@mui/icons-material/PlaylistAddCheckRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import {NavLink, useNavigate} from "react-router-dom";

const activeClassName = (active) => active ? styles.active : undefined

const links = [
  {
    name: 'Курсы валют',
    icon: <LeaderboardOutlinedIcon/>,
    path: '/exchange-rate'
  },
  {
    name: 'Мой профиль',
    icon: <PersonOutlineOutlinedIcon/>,
    path: '/profile'
  },
  {
    name: 'Обмен валют',
    icon: <SyncAltRoundedIcon/>,
    path: '/currency-exchange'
  },
  {
    name: 'Кошельки',
    icon: <WorkOutlineOutlinedIcon/>,
    path: '/wallets'
  },
  {
    name: 'Транзакции',
    icon: <PlaylistAddCheckRoundedIcon/>,
    path: '/transactions'
  },
];

const NavSidebar = () => {
  const navigate = useNavigate();
  const handleExit = () => {
    localStorage.removeItem("authorized")
    // navigate(`/`, {replace: true})
  }

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
          {links.map((link) => {
              return (
                <NavLink key={link.path} to={link.path} className={({isActive}) => activeClassName(isActive)}>
                  <MyButton

                    size="mediumWithIcon"
                    variant="text"
                    startIcon={link.icon}
                    fullWidth
                    sx={ { justifyContent: 'start'} }
                  >{link.name}</MyButton>
                </NavLink>
              )
            }
          )}

        </div>
        <div>
          <div className={styles.sidebar__line}></div>
          <div className={styles.sidebar__leave_button}>
            <NavLink to={'*'}>
              <MyButton
                fullWidth
                onClick={handleExit}
                size="mediumWithIcon"
                variant="text"
                startIcon={<ExitToAppRoundedIcon/>}
                sx={ { justifyContent: 'start'} }
              >Выход</MyButton>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavSidebar;