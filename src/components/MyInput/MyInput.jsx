import React from 'react';
import TextField from '@mui/material/TextField';

const MyInput = (props) => {
  return (
    <div>
      <TextField
        sx={{
          color: '#42a500',
          borderRadius: 0,
          borderColor: '#1ea500',
        }}
        id="outlined-basic"
        label="Имя"
        variant="outlined"
        {...props}
      />

    </div>
  );
};

export default MyInput;