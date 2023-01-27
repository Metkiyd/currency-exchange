import React, { useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../../../redux/actions/postsAction'
import { getTransactions } from '../../../redux/actions/transactionsAction'
import { FormHelperText } from '@mui/material'

const WalletSelector = (props) => {
  // console.log('=>WalletSelector.props', props)
  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(getAllPosts())
  }, [])

  const wallets = useSelector((state) => state.allPosts.posts)
  // console.log('=>wallets-DB', wallets)

  return (
    <>
      <TextField
        sx={{
          width: 164,
          '& .MuiInputBase-root': {
            borderRadius: 0,
          },
        }}
        id='outlined-basic'
        variant='outlined'
        type='number'
        error={props.errorbalance}
        helperText={props.helpertextbalance}
        value={props.amount}
        label={props.labelname}
        onChange={(e) => props.onAmountChange(e.target.value)}
        {...props}
      />
      <FormControl
        sx={{
          maxWidth: 333,
        }}
        fullWidth
        error={props.errorwallet}
      >
        <InputLabel id='demo-simple-selecfullWidtht-label' {...props}>
          Выберите кошелёк
        </InputLabel>
        <Select
          sx={{
            borderRadius: 0,
          }}
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          // value={props.wallets}
          value={props.currency}
          label='Выберите кошелёк'
          // onChange={handleChange}
          onChange={(e) => props.onCurrencyChange(e.target.value)}
          // onSelect={handleCallback}
          {...props}
        >
          {wallets.map(({ icon, currency, sign, number, _id, balance }) => {
            return (
              <MenuItem key={_id} value={currency}>
                <div
                  style={{
                    display: 'flex',
                    gap: '8px',
                  }}
                >
                  <img src={icon} alt={currency} />
                  <div>{currency}</div>
                  <div>{balance}</div>
                  <div>{sign}</div>
                </div>
              </MenuItem>
            )
          })}
        </Select>
        <FormHelperText id='outlined-weight-helper-text' {...props}>
          {props.helpertextwallet}
        </FormHelperText>
      </FormControl>
    </>
  )
}

export default WalletSelector
