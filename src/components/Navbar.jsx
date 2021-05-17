import React from 'react'
// import { Link as RouterLink } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Chip, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { useComputer } from '../hooks'

const useStyles = makeStyles((theme) => ({
  title: {
    marginRight: 'auto'
  },
  progress: {
    marginLeft: theme.spacing(1)
  },
  button: {
    marginRight: theme.spacing(10)
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
      <Toolbar variant='dense'>
        <Typography variant='h6' color='inherit' className={styles.title}>
          Сборка компьютера AR
        </Typography>
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
