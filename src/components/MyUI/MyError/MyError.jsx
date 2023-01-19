import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axiosBack from '../../../api/axiosBack'

const MyError = (props) => {
  console.log('=>me-props', props)
  const errorNote = (props) => toast.error(props)
  console.log('=>en-props', props)
  const handleClick = async () => {
    await errorNote('hui')
  }

  return (
    <div>
      <button onClick={handleClick}>Notify</button>
      <ToastContainer limit={10} />
    </div>
  )
}

export default MyError
