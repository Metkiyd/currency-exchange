import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'
import { ReactComponent as PositiveArrowIcon } from '../../../assets/icons/positiveArrowIcon.svg'
import { ReactComponent as NegativeArrowIcon } from '../../../assets/icons/negativeArrowIcon.svg'
import styles from '../../../pages/ExchangeRatePage/styles.module.scss'

const MySearch = (props) => {
  const [value, setValue] = React.useState(props.allValutes[0])
  console.log('=>value-state', value)
  const [inputValue, setInputValue] = React.useState('')
  console.log('=>inputValue-state', inputValue)
  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue)
      }}
      sx={{
        maxWidth: 420,
        '& .MuiInputBase-root': {
          borderRadius: 0,
        },
      }}
      id='free-solo-demo'
      freeSolo
      {...props}
      options={props.allValutes}
      getOptionLabel={(option) => option.fullName}
      renderOption={(
        props,
        { fullName, name, rate, changePerc, change, increase },
      ) => (
        <Box
          component='li'
          // sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          {/*{fullName} ({name}) +{name}*/}
          <div key={name} className={styles.valute}>
            <div className={styles.resCur}>
              <div className={styles.column1}>
                <span className={styles.one}>{fullName}</span>
                <span className={styles.two}>{name}</span>
              </div>
            </div>

            {increase ? (
              <div className={styles.flex_align}>
                <span className={styles.two}>{rate}</span>

                <div className={styles.valute__num_percent}>
                  <PositiveArrowIcon />
                  <div className={styles[increase ? 'column2' : 'column3']}>
                    <span className={styles.three}>{changePerc}%</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.flex_align}>
                <span className={styles.two}>{rate}</span>
                <div className={styles.valute__num_percent2}>
                  <NegativeArrowIcon />
                  <div className={styles[increase ? 'column2' : 'column3']}>
                    <span className={styles.three}>{changePerc}%</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label='Поиск валюты'
          InputProps={{
            endAdornment: (
              <SearchIcon
                sx={{
                  color: '#8C8C8C',
                }}
              />
            ),
            ...params.InputProps,
          }}
        />
      )}
    />
  )
}

export default MySearch
