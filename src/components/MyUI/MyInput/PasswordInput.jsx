import React from 'react'
import {
  InputLabel,
  OutlinedInput,
  IconButton,
  InputAdornment,
  FormControl,
  FormHelperText,
} from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material'

const PasswordInput = (props) => {
  const [showPassword, setShowPassword] = React.useState(false)
  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  return (
    <FormControl
      sx={{
        maxWidth: 388,
        '& .MuiInputBase-root': {
          borderRadius: 0,
        },
      }}
      fullWidth
      {...props}
    >
      <InputLabel htmlFor='outlined-adornment-password' {...props}>
        {props.label}
      </InputLabel>
      <OutlinedInput
        {...props}
        id='outlined-adornment-password'
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge='end'
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      <FormHelperText id='outlined-weight-helper-text' {...props}>
        {props.helperText}
      </FormHelperText>
    </FormControl>
  )
}

export default PasswordInput
