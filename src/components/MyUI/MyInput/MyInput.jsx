import React from 'react'
import TextField from '@mui/material/TextField'

const MyInput = (props) => {
  // console.log('===>props', props)

  return (
    <TextField
      sx={{
        maxWidth: 388,
        '& .MuiInputBase-root': {
          borderRadius: 0,
        },
      }}
      id='outlined-basic'
      variant='outlined'
      fullWidth
      {...props}
    />
  )
}

export default MyInput
