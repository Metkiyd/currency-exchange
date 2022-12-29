import React from 'react';
import TextField from '@mui/material/TextField';

const MyInput = (props) => {
  console.log('===>props', props)
  
  return (
      <TextField
        sx={{
          // MuiInputBase-root-MuiOutlinedInput-root
          // color: '#42a500',
          // borderRadius: 0,
          // borderColor: '#1ea500',
        }}
        id="outlined-basic"
        variant="outlined"
        fullWidth
        {...props}
      />
  );
};

export default MyInput;