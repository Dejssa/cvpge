import { createTheme } from '@mui/material/styles'

const applicationTheme = createTheme({
  shape: {
    borderRadius: 16,
  },

  palette: {
    font: {
      main: '#01124f',
    },
    status: {
      online: 'green',
      offline: 'red',
    },
  },
  typography: {
    fontFamily: 'Montserrat,sans-serif',
    fontSize: 24,
  },
})

applicationTheme.components = {
  ...applicationTheme.components,
}

export default applicationTheme
