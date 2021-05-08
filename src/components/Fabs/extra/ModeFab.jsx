/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { Fab, Menu, MenuItem, Typography } from '@material-ui/core'
import {
  TouchApp as TouchAppIcon,
  Check as CheckIcon
} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon'

import { EDIT_MODES } from '../../../constants'

import { useComputer } from '../../../hooks'

const useStyles = makeStyles((theme) => ({
  wrapperFab: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  fabItem: {
    textAlign: 'center',
    marginTop: theme.spacing(2)
  },
  imageIcon: {
    width: '22px',
    height: 'auto'
  }
}))

export default function ModeFab() {
  const styles = useStyles()

  const { editMode, setEditMode } = useComputer()

  return (
    <div className={styles.wrapperFab}>
      {EDIT_MODES.map((mode, index) => (
        <Fab
          className={styles.fabItem}
          color={editMode === mode.value ? 'secondary' : 'primary'}
          aria-controls='mode-menu'
          size='small'
          onClick={() => setEditMode(mode.value)}
          key={index}
        >
          <img className={styles.imageIcon} src={mode.icon} />
        </Fab>
      ))}
    </div>
  )
}
