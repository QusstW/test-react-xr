import React, { createRef } from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { SnackbarProvider } from 'notistack'
import { IconButton } from '@material-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'

import { ComputerProvider } from '../providers'
import { Fabs, ModeSlider, Navbar } from '../components'
import Scene from './scene'

export default function App() {
  const notistackRef = createRef()
  const onSnackDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key)
  }

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#ff6e40'
      },
      secondary: {
        main: '#18ffff'
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={3}
        ref={notistackRef}
        action={(key) => (
          <IconButton color='inherit' onClick={onSnackDismiss(key)}>
            <CloseIcon />
          </IconButton>
        )}
      >
        <ComputerProvider>
          <Navbar />
          <Scene />
          <Fabs />
          <ModeSlider />
        </ComputerProvider>
      </SnackbarProvider>
    </ThemeProvider>
  )
}
