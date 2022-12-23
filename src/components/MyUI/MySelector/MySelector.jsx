import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {ReactComponent as RubIcon} from '../../../assets/icons/rubIcon.svg';
import {ReactComponent as UsdIcon} from '../../../assets/icons/usdIcon.svg';
import {ReactComponent as EurIcon} from '../../../assets/icons/eurIcon.svg';
import {ReactComponent as CnyIcon} from '../../../assets/icons/cnyIcon.svg';
import {ReactComponent as TryIcon} from '../../../assets/icons/tryIcon.svg';

const currencies = [
  {
    id:1,
    icon: <RubIcon/>,
    value: 'RUB'
  },
  {
    id:2,
    icon: <UsdIcon/>,
    value: 'USD'
  },
  {
    id:3,
    icon: <CnyIcon/>,
    value: 'CNY'
  },
  {
    id:4,
    icon: <EurIcon/>,
    value: 'EUR'
  },
  {
    id:5,
    icon: <TryIcon/>,
    value: 'TRY'
  },

]

const MySelector = (props) => {
  const [currency, setCurrency] = React.useState('');

  const handleSelect = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <FormControl>
      <InputLabel id="demo-simple-selecfullWidtht-label">
        Выберите валюту
      </InputLabel>
      <Select
        sx={{
          width: 333,
          borderRadius: 0,
        }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={currency}
        label="Выберите валюту"
        onChange={handleSelect}
        {...props}
      >
        {
          currencies.map(
            ({
                icon,
                value,
                id
              }) => {
              return (
                <MenuItem key={id} value={value}>
                  {icon}
                  {value}
                </MenuItem>

              )
            }
          )
        }
      </Select>
    </FormControl>

  );
};

export default MySelector;


// import { makeStyles } from "@material-ui/core/styles";

// import France from "./assets/flags/france.png";
// import Allemagne from "./assets/flags/germany.png";
// import Suisse from "./assets/flags/switzerland.png";
//
// const countries = [
//   {
//     label: "France",
//     src: France,
//     link: " ",
//     value: "FR"
//   },
//   {
//     label: "Allemagne",
//     src: Allemagne,
//     link: " ",
//     value: "DE"
//   },
//   {
//     label: "Suisse",
//     src: Suisse,
//     link: " ",
//     value: "CH"
//   }
// ];

// const useStyles = makeStyles(theme => ({
//   button: {
//     display: "block",
//     marginTop: theme.spacing(2)
//   },
//   formControl: {
//     margin: theme.spacing(5),
//     minWidth: 120,
//     backgroundColor: "transparent"
//   },
//   select: {
//     textAlign: "center",
//     textDecoration: "none"
//   }
// }));
// function App() {
//   const classes = useStyles();
//   const [country, setCountry] = React.useState(France);
//   const [open, setOpen] = React.useState(false);
//
//   const handleChange = event => {
//     setCountry(event.target.value);
//   };
//
//   const handleClose = () => {
//     setOpen(false);
//   };
//
//   const handleOpen = () => {
//     setOpen(true);
//   };
//
//   return (
//     <form autoComplete="off">
//       <FormControl className={classes.formControl}>
//         <InputLabel htmlFor="open-select" />
//         <Select
//           open={open}
//           onClose={handleClose}
//           onOpen={handleOpen}
//           value={country}
//           name="country"
//           onChange={handleChange}
//           inputProps={{
//             id: "open-select"
//           }}
//         >
//           {countries.map((option, key) => (
//             <MenuItem value={option.src} key={key}>
//               <img src={option.src} alt={option.label} />{key}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </form>
//   );
// }



