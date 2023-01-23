import React from 'react'
import { MyButton } from '../MyUI/MyButton'
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import SyncAltRoundedIcon from '@mui/icons-material/SyncAltRounded'
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined'
import PlaylistAddCheckRoundedIcon from '@mui/icons-material/PlaylistAddCheckRounded'
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded'
import { NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../../redux/actions/authAction'
import { useDispatch } from 'react-redux'
import styles from '../NavSidebar/styles.module.scss'
import justice from '../../assets/images/justice.png'
const activeClassName = (active) => (active ? styles.active : undefined)

const links = [
  {
    name: 'Курсы валют',
    icon: <LeaderboardOutlinedIcon />,
    path: '/exchange-rate',
  },
  {
    name: 'Мой профиль',
    icon: <PersonOutlineOutlinedIcon />,
    path: '/profile',
  },
  {
    name: 'Кошельки',
    icon: <WorkOutlineOutlinedIcon />,
    path: '/wallets',
  },
  {
    name: 'Обмен валют',
    icon: <SyncAltRoundedIcon />,
    path: '/currency-exchange',
  },
  {
    name: 'Транзакции',
    icon: <PlaylistAddCheckRoundedIcon />,
    path: '/transactions',
  },
]

const NavSidebar = () => {
  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  )
}
const DesktopSidebar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleExit = () => {
    dispatch(logout())

    // localStorage.removeItem('authorized')
    // navigate(`/`, {replace: true})
  }
  return (
    <section className={styles.sidebar}>
      <div className={styles.sidebar__container}>
        <div className={styles.sidebar__links}>
          <div className={styles.sidebar__logo}>
            <p className={styles.sidebar__logo__text_bold}>justice</p>
            <p className={styles.sidebar__logo__text}>finance</p>
          </div>
          {links.map((link) => {
            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => activeClassName(isActive)}
              >
                <MyButton
                  size='mediumWithIcon'
                  variant='text'
                  startIcon={link.icon}
                  fullWidth
                  sx={{ justifyContent: 'start' }}
                >
                  {link.name}
                </MyButton>
              </NavLink>
            )
          })}
        </div>
        <div>
          <div className={styles.sidebar__line}></div>
          <div className={styles.sidebar__leave_button}>
            <NavLink to={'*'}>
              <MyButton
                fullWidth
                onClick={handleExit}
                size='mediumWithIcon'
                variant='text'
                startIcon={<ExitToAppRoundedIcon />}
                sx={{ justifyContent: 'start' }}
              >
                Выход
              </MyButton>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  )
}

const MobileSidebar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleExit = () => {
    dispatch(logout())

    // localStorage.removeItem('authorized')
    // navigate(`/`, {replace: true})
  }
  return (
    <section className={styles.mobile}>
      <div className={styles.mobile__container}>
        <div className={styles.mobile__links}>
          <div className={styles.mobile__logo}>
            <img alt='justice' width='48' height='48' src={justice} />
          </div>
          {links.map((link) => {
            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => activeClassName(isActive)}
              >
                <MyButton
                  size='iconMedium'
                  fullWidth
                  sx={{ justifyContent: 'start' }}
                >
                  {link.icon}
                </MyButton>
              </NavLink>
            )
          })}
        </div>
        <div>
          <div className={styles.mobile__line}></div>
          <div className={styles.mobile__leave_button}>
            <NavLink to={'*'}>
              <MyButton
                fullWidth
                onClick={handleExit}
                size='iconMedium'
                sx={{ justifyContent: 'start' }}
              >
                <ExitToAppRoundedIcon />
              </MyButton>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  )
}
export default NavSidebar
