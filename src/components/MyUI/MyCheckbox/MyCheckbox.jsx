import {Checkbox, createTheme, FormControlLabel, ThemeProvider} from "@mui/material";
import CheckBoxSharpIcon from '@mui/icons-material/CheckBoxSharp';
import CheckBoxOutlineBlankSharpIcon from '@mui/icons-material/CheckBoxOutlineBlankSharp';

const theme = createTheme({
  palette: {
    primary: {
      main: '#84A500'
    },
    // checkbox: {
    //   '& .MuiCheckbox-root:disabled': {
    //     color: '#a50000',
    //   },
    //   disabled: {
    //     color: '#a50000'
    //   }
    // },

  }
})
const MyCheckbox = (props) => {
  const {label} = props
  return (
    <ThemeProvider theme={theme}>
      <FormControlLabel control={
        <Checkbox
          // sx={{
          //   color: '#a50000',
          //   '& .MuiCheckbox-root:disabled': {
          //     color: '#a50000',
          //   }
          // }}
          icon={<CheckBoxOutlineBlankSharpIcon/>}
          checkedIcon={<CheckBoxSharpIcon/>}
          {...props}
        />} label={label}/>
    </ThemeProvider>
  );
};

export default MyCheckbox;