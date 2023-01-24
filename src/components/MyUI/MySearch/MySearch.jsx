import React, { useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'
import { ReactComponent as PositiveArrowIcon } from '../../../assets/icons/positiveArrowIcon.svg'
import { ReactComponent as NegativeArrowIcon } from '../../../assets/icons/negativeArrowIcon.svg'
import styles from '../../../pages/ExchangeRatePage/styles.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedValute } from '../../../redux/actions/selectedValuteAction'
import CircularProgress from '@mui/material/CircularProgress'
import { Skeleton } from '@mui/material'

const MySearch = (props) => {
  const isLoading = false
  const dispatch = useDispatch()

  const allValutes = useSelector((state) => state.allValutes.allValutes)
  // console.log('=>allValutes-state', allValutes)

  const selectedValute = useSelector(
    (state) => state.selectedValute.selectedValute,
  )
  // console.log('=>selectedValute-state', selectedValute)

  const [inputValue, setInputValue] = React.useState('')
  return (
    <Autocomplete
      value={selectedValute}
      onChange={(event, newValue) => {
        dispatch(setSelectedValute(newValue))
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
      fullWidth
      {...props}
      options={allValutes}
      getOptionLabel={(option) => option.fullName}
      renderOption={
        isLoading
          ? (props) => (
              <Skeleton
                variant='rectangular'
                width={100}
                height={30}
              ></Skeleton>
            )
          : (props, { fullName, name, rate, changePerc, increase }) => (
              <Box component='li' {...props}>
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
                        <div
                          className={styles[increase ? 'column2' : 'column3']}
                        >
                          <span className={styles.three}>{changePerc}%</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={styles.flex_align}>
                      <span className={styles.two}>{rate}</span>
                      <div className={styles.valute__num_percent2}>
                        <NegativeArrowIcon />
                        <div
                          className={styles[increase ? 'column2' : 'column3']}
                        >
                          <span className={styles.three}>{changePerc}%</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Box>
            )
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label='Поиск валюты'
          InputProps={{
            endAdornment: (
              <React.Fragment>
                {isLoading ? (
                  <CircularProgress color='inherit' size={18} />
                ) : (
                  <SearchIcon
                    sx={{
                      color: '#8C8C8C',
                    }}
                  />
                )}
              </React.Fragment>
            ),
            ...params.InputProps,
          }}
        />
      )}
    />
  )
}

export default MySearch
