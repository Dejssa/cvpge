import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { ThemeProvider } from '@mui/material/styles'

import applicationTheme from './theme'
import Application from './views/Application'


const hist = createBrowserHistory()

ReactDOM.render((
  <ThemeProvider theme={applicationTheme}>
    <Application history={hist} />
  </ThemeProvider>
), document.getElementById('root'))

export { hist }
