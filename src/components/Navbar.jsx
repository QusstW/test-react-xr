import React from 'react'
// import { Link as RouterLink } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Chip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import useComputer from '../hooks/useComputer'

const useStyles = makeStyles((theme) => ({
  title: {
    marginRight: 'auto'
  },
  progress: {
    marginLeft: theme.spacing(1)
  }
}))

const NavMenu = () => {
  const styles = useStyles()
  const { progress } = useComputer()

  return (
    <AppBar position='fixed'>
      <Toolbar variant='dense'>
        <Typography variant='h6' color='inherit' className={styles.title}>
          Сборка компьютера AR
        </Typography>
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
