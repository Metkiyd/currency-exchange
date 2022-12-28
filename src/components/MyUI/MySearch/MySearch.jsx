import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TextField from "@mui/material/TextField";


const MySearch = (props) => {
  return (
    <div>
      <div>
        <TextField
          sx={{
            color: '#42a500',
            borderRadius: 0,
            borderColor: '#1ea500',
          }}
          id="outlined-basic"
          label="Поиск валюты"
          variant="outlined"

          InputProps={{
            endAdornment: (
              <SearchIcon
                sx={{
                  color: '#8C8C8C',
                }}
              />
            )
          }}
          {...props}
        />

      </div>
    </div>
  );
};

export default MySearch;