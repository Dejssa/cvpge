import React from 'react'

import { ThemeProvider } from '@mui/material/styles'
import i18n from 'i18n'
import ReactDOM from 'react-dom'
import { I18nextProvider } from 'react-i18next'

import Application from './views/Application'
import applicationTheme from './theme'

ReactDOM.render((
  <ThemeProvider theme={applicationTheme}>
    <I18nextProvider i18n={i18n}>
      <Application />
    </I18nextProvider>
  </ThemeProvider>
), document.getElementById('root'))
