import React, { useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import axiosBack from '../../../api/axiosBack'
import { NavButton } from '../../MyUI/MyNavButton'

import styles from './styles.module.scss'

import AddRoundedIcon from '@mui/icons-material/AddRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import noPhoto from '../../../assets/images/noPhoto.png'

const Avatar = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const isEditing = Boolean(location.pathname === '/profile')
  const inputFileRef = useRef(null)

  const User = useSelector((state) => state.user.user)
  const [form, setForm] = useState(User)
  // console.log('=>form-sidebar', form)
  //
  // useEffect(() => {
  //   dispatch(setUser(form))
  // }, [form.avatarUrl])

  const handleChangeAvatar = async (event) => {
    try {
      const formData = await new FormData()
      const file = await event.target.files[0]
      await formData.append('image', file)
      const { data } = await axiosBack.post('/upload', formData)

      // await console.log('=>form-profile-bef-click', form)
      await setForm({
        ...form,
        avatarUrl: data.url,
      })

      // await axiosBack.patch('/auth/update', form)
      // await console.log('=>form-profile-aft-click', form)
    } catch (err) {
      alert('upload file error')
    }
  }

  const onClickRemoveAvatar = async () => {
    // await console.log('=>form-profile-bef-del', form)
    await setForm({
      ...form,
      avatarUrl: '',
    })

    // await axiosBack.patch('/auth/update', form)
    // await console.log('=>form-profile-aft-del', form)
  }

  return (
    <div className={styles.avatar}>
      <div className={styles.wrap}>
        <div className={styles.half_circle}>
          <svg
            width='96'
            height='96'
            viewBox='0 0 96 96'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M96 48C96 57.4935 93.1849 66.7738 87.9105 74.6674C82.6362 82.5609 75.1397 88.7132 66.3688 92.3462C57.5979 95.9792 47.9468 96.9298 38.6357 95.0777C29.3246 93.2256 20.7718 88.654 14.0589 81.9411C7.34595 75.2282 2.7744 66.6754 0.922306 57.3643C-0.929784 48.0532 0.0207761 38.4021 3.65378 29.6312C7.28679 20.8603 13.4391 13.3638 21.3326 8.08946C29.2262 2.81515 38.5065 -1.13209e-07 48 0V2.4C38.9812 2.4 30.1649 5.07439 22.666 10.085C15.1671 15.0956 9.32245 22.2173 5.87109 30.5496C2.41974 38.8819 1.51671 48.0506 3.27619 56.8961C5.03568 65.7417 9.37866 73.8668 15.7559 80.2441C22.1332 86.6213 30.2583 90.9643 39.1039 92.7238C47.9494 94.4833 57.1181 93.5803 65.4504 90.1289C73.7827 86.6776 80.9044 80.8329 85.915 73.334C90.9256 65.8351 93.6 57.0188 93.6 48H96Z'
              fill='#363636'
            />
          </svg>
        </div>

        {form.avatarUrl ? (
          <>
            <img
              className={styles.avatarImg}
              src={`http://localhost:4444${form.avatarUrl}`}
              alt='uploaded'
              width='84'
              height='84'
            />
            {isEditing ? (
              <NavButton
                sx={{
                  position: 'absolute',
                  bottom: '65px',
                  left: '65px',
                  height: '24px',
                  minHeight: '24px',
                  width: '24px',
                }}
                onClick={onClickRemoveAvatar}
              >
                <CloseRoundedIcon />
              </NavButton>
            ) : (
              ''
            )}
          </>
        ) : (
          <>
            <img alt='loginImage' width='84' height='84' src={noPhoto} />
            {isEditing ? (
              <>
                <NavButton
                  sx={{
                    position: 'absolute',
                    bottom: '65px',
                    left: '65px',
                    height: '24px',
                    minHeight: '24px',
                    width: '24px',
                  }}
                  onClick={() => inputFileRef.current.click()}
                >
                  <AddRoundedIcon />
                </NavButton>
                <input
                  ref={inputFileRef}
                  type={'file'}
                  onChange={handleChangeAvatar}
                  hidden
                />
              </>
            ) : (
              ''
            )}
          </>
        )}
      </div>

      <p className={styles.text_500}>
        {/*Алексей Иванов*/}
        {User.fullName}
      </p>
    </div>
  )
}
export default Avatar
