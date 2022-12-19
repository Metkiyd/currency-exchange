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

const NextButton = (props) => {
  return (
      <ThemeProvider theme={theme}>
        <Fab size="small" color="primary" aria-label="next" {...props}>
          <ChevronRightOutlinedIcon/>
        </Fab>
      </ThemeProvider>
  );
};

export default NextButton;
