import { createTheme, responsiveFontSizes } from '@mui/material/styles'


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
    htmlFontSize: 16,
  },

})

applicationTheme.components = {
  ...applicationTheme.components,
}

const theme = responsiveFontSizes(applicationTheme)

export default theme
