import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TextField from "@mui/material/TextField";
import {InputAdornment, IconButton} from "@mui/material";


const MySearch = () => {
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
          label="Search for currency"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />

      </div>
    </div>
  );
};

export default MySearch;