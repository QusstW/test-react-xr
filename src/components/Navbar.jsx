import React from 'react'
// import { Link as RouterLink } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Chip, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { useComputer } from '../hooks'

const useStyles = makeStyles((theme) => ({
  title: {
    marginRight: 'auto'
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  progress: {
    marginLeft: theme.spacing(1)
  },
  button: {
    marginLeft: theme.spacing(1)
  }
}))

const boxCondition = (boxOpen, setBoxOpen) => {
  if (boxOpen) {
    setBoxOpen(false)
  } else setBoxOpen(true)
}

const NavMenu = () => {
  const styles = useStyles()
  const { progress, boxOpen, setBoxOpen } = useComputer()

  return (
    <AppBar position='fixed'>
      <Toolbar className={styles.toolBar} variant='dense'>
        <Button
          className={styles.button}
          style={
            boxOpen
              ? { backgroundColor: '#f6685e' }
              : { backgroundColor: '#a2cf6e' }
          }
          onClick={() => {
            boxCondition(boxOpen, setBoxOpen)
          }}
        >
          {boxOpen ? 'Закрыть корпус' : 'Открыть корпус'}
        </Button>
        <Chip
          className={styles.progress}
          style={{ backgroundColor: progress.color, color: '#fff' }}
          label={`${progress.value}%`}
          size='small'
        />
      </Toolbar>
    </AppBar>
  )
}
export default NavMenu
