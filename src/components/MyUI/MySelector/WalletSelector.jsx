import React, {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';


const WalletSelector = (props) => {
  // console.log('===>Wallets.props', props)


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
        {props.wallets.map(
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
              )})
        }
      </Select>
    </FormControl>
  );
};

export default WalletSelector;
