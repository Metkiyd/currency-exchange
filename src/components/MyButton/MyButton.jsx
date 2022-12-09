import {Button, createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#363636'
    },
    error: {
      main: '#A52800',
    },

  },

  typography: {
    button: {
      textTransform: 'none',
      fontWeight: '600'
    }
  }
})

const MyButton = (props) => {
  const {children} = props

  return (
    <ThemeProvider theme={theme}>
      <Button
        sx={{
          borderRadius: 0
        }}
        {...props}
      >
        {children}
      </Button>
    </ThemeProvider>
  )
};

export default MyButton;
