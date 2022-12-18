import {Button, createTheme, ThemeProvider} from "@mui/material";
// import styles from './style.css'

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        size: "small"
      },
      variants: [
        {
          props: {size: "small"},
          style: {
            padding: '12px 24px',
            fontSize: '12px',
            height: '40px',
          }

        },
        {
          props: {size: "smallWithIcon"},
          style: {
            padding: '12px 16px',
            fontSize: '12px',
            height: '40px',
          }

        },
        {
          props: {size: "iconSmall"},
          style: {
            padding: '12px',
            fontSize: '12px',
            minWidth: '40px'
          }

        },

        {
          props: {size: "medium"},
          style: {
            padding: '12px 24px',
            fontSize: '14px',
          }
        },
        {
          props: {size: "mediumWithIcon"},
          style: {
            padding: '12px 16px',
            fontSize: '14px',
          }
        },
        {
          props: {size: "iconMedium"},
          style: {
            padding: '12px',
            fontSize: '14px',
            minWidth: '48px'
          }
        },
        {
          props: {size: "large"},
          style: {
            padding: '15px 24px',
            fontSize: '16px',
          }
        },
        {
          props: {size: "largeWithIcon"},
          style: {
            padding: '16px',
            fontSize: '16px',
          }
        },
        {
          props: {size: "iconLarge"},
          style: {
            padding: '16px',
            fontSize: '16px',
            minWidth: '56px'
          }
        },
      ]

    }
  },
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
    },

  }
})

const MyButton = (props) => {
  const {children} = props

  return (
    <ThemeProvider theme={theme}>
      <Button
        sx={{borderRadius: 0}}
        {...props}
      >
        {children}
      </Button>
    </ThemeProvider>
  )
};

export default MyButton;

// '& .MuiButton-sizeLarge': {
//   backgroundColor: '#0069d9',
//   m: 1
// },
// '& .MuiButton-containedSizeLarge': {
//   color: 'success.main',
// },
// '&:hover': {
//   backgroundColor: '#0069d9',
//   borderColor: '#0062cc',
//   boxShadow: 'none',
// },
// '& > *': {
//   color: 'success.main',
// },


