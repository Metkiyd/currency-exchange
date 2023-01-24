import * as React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import CircularProgress from '@mui/material/CircularProgress'
import { Skeleton } from '@mui/material'
import { useSelector } from 'react-redux'

function sleep(delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}

export default function Asynchronous() {
  const allValutes = useSelector((state) => state.allValutes.allValutes)
  // console.log('=>allValutes-state', allValutes)

  const [open, setOpen] = React.useState(false)
  const [options, setOptions] = React.useState([])
  const loading = open && options.length === 0

  React.useEffect(() => {
    let active = true

    if (loading) {
      return undefined
    }

    ;(async () => {
      await sleep() // For demo purposes.

      if (active) {
        setOptions([...allValutes])
      }
    })()

    return () => {
      active = false
    }
  }, [loading])

  React.useEffect(() => {
    if (!open) {
      setOptions([])
    }
  }, [open])

  return (
    <Autocomplete
      id='asynchronous-demo'
      sx={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true)
      }}
      onClose={() => {
        setOpen(false)
      }}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label='Asynchronous'
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color='inherit' size={20} />
                ) : // <Skeleton
                //   variant='rectangular'

                //   width={100}
                //   height={30}
                // />
                null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  )
}
