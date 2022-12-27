import React, {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
// import {ReactComponent as RubIcon} from '../../../assets/icons/rubIcon.svg';
// import {ReactComponent as UsdIcon} from '../../../assets/icons/usdIcon.svg';
// import {ReactComponent as EurIcon} from '../../../assets/icons/eurIcon.svg';
// import {ReactComponent as CnyIcon} from '../../../assets/icons/cnyIcon.svg';
// import {ReactComponent as TryIcon} from '../../../assets/icons/tryIcon.svg';

const WalletSelector = (props) => {
  console.log('===>Wallets.props', props)

  //
  // const [form, setForm] = useState(
  //   {
  //     id: '',
  //     balance: '0',
  //     currency: '',
  //     sign: '',
  //     icon: null
  //   }
  // )
  // console.log('===>form', form)
  //
  // const handleChange = (e) => {
  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.value
  //   })
  // }

  return (
    <FormControl>
      <InputLabel id="demo-simple-selecfullWidtht-label">
        Выберите кошелёк
      </InputLabel>
      <Select
        sx={{
          width: 333,
          borderRadius: 0,
        }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        // value={props.wallets}
        value={props.changed}
        label="Выберите кошелёк"
        // onChange={handleChange}
        onChange={props.onChange}
        {...props}
      >
        {
          props.wallets.map(
            ({
               icon,
               currency,
              sign,
               value,
               id,
               balance,
             }) => {
              return (
                <MenuItem key={id} value={id}>
                  <div style={{
                    display: 'flex',
                    gap: '8px',
                  }}>
                    <img src={icon} alt={currency}/>

                    <div>{currency}</div>

                    <div>{balance}</div>

                    <div>{sign}</div>

                  </div>


                </MenuItem>

              )
            }
          )
        }
        {/*<MenuItem value={10}>*/}
        {/*  <RubIcon/>*/}
        {/*  RUB</MenuItem>*/}
        {/*<MenuItem value={20}>*/}
        {/*  <UsdIcon/>*/}
        {/*  USD</MenuItem>*/}
        {/*<MenuItem value={30}>*/}
        {/*  <CnyIcon/>*/}
        {/*  CNY</MenuItem>*/}
        {/*<MenuItem value={40}>*/}
        {/*  <EurIcon/>*/}
        {/*  EUR</MenuItem>*/}
        {/*<MenuItem value={50}>*/}
        {/*  <TryIcon/>*/}
        {/*  TRY</MenuItem>*/}

      </Select>
    </FormControl>

  );
};

export default WalletSelector;


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



