import React, { useState } from 'react'
import { Fab, Menu, MenuItem, Typography } from '@material-ui/core'
import {
  TouchApp as TouchAppIcon,
  Check as CheckIcon
} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

import { EDIT_MODES } from '../../../constants'

import { useComputer } from '../../../hooks'

const useStyles = makeStyles((theme) => ({
  modeFab: {
    position: 'absolute',
    bottom: theme.spacing(12),
    right: theme.spacing(4)
  },
  modeMenuItem: {
    justifyContent: 'space-between'
  },
  modeMenuItemText: {
    marginRight: theme.spacing(1)
  }
}))

export default function ModeFab() {
  const styles = useStyles()

  const { editMode, setEditMode } = useComputer()
  const [modeMenu, setModeMenu] = useState()
  const handleSelectMode = (mode) => {
    setEditMode(mode)
    setModeMenu(null)
  }

  return (
    <>
      <Fab
        className={styles.modeFab}
        color='primary'
        aria-controls='mode-menu'
        size='small'
        onClick={(e) => setModeMenu(e.currentTarget)}
      >
        <TouchAppIcon fontSize='small' />
      </Fab>
      <Menu
        id='mode-menu'
        anchorEl={modeMenu}
        keepMounted
        open={Boolean(modeMenu)}
        onClose={() => setModeMenu(null)}
      >
        {EDIT_MODES.map((mode, index) => (
          <MenuItem
            className={styles.modeMenuItem}
            key={index}
            onClick={() => handleSelectMode(mode.value)}
          >
            <Typography className={styles.modeMenuItemText}>
              {mode.name}
            </Typography>
            {mode.value === editMode && <CheckIcon />}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}
