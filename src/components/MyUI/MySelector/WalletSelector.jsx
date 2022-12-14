import React, {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from "@mui/material/TextField";


const WalletSelector = (props) => {
  console.log('===>Wallets.props', props)


  return (
    <>
      <TextField
        sx={{width: 164}}
        id="outlined-basic"
        variant="outlined"
        type="number"
        fullWidth
        value={props.amount}
        label={props.labelname}
        onChange={e => props.onAmountChange(e.target.value)}
        {...props}
      />
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
          value={props.currency}
          label="Выберите кошелёк"
          // onChange={handleChange}
          onChange={e => props.onCurrencyChange(e.target.value)}
          {...props}
        >
          {props.wallets.map(
            ({
               icon,
               currency,
               sign,
               number,
               value,
               id,
               balance,
             }) => {
              return (
                <MenuItem key={id} value={currency}>
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
            })
          }
        </Select>
      </FormControl>
    </>
  );
};

export default WalletSelector;
