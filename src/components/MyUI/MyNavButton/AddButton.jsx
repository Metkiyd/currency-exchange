import React from 'react';
import Fab from '@mui/material/Fab';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#363636'
    },

  },

})

const AddButton = (props) => {
  return (
      <ThemeProvider theme={theme}>
        <Fab size="small" color="primary" aria-label="next" {...props}>
          <AddRoundedIcon/>
        </Fab>
      </ThemeProvider>
  );
};

export default AddButton;
