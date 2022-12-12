import React from 'react';
import Fab from '@mui/material/Fab';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#363636'
    },

  },

})

const MyNavButton = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Fab size="small" color="primary" aria-label="prev">
          <ChevronLeftOutlinedIcon/>
        </Fab>
        <Fab size="small"disabled aria-label="next">
          <ChevronRightOutlinedIcon/>
        </Fab>
      </ThemeProvider>
    </div>
  );
};

export default MyNavButton;





