import React from 'react'
import { Slider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { useComputer } from '../hooks'

const useStyles = makeStyles((theme) => ({
  slider: {
    position: 'absolute',
    bottom: theme.spacing(1),
    left: theme.spacing(11),
    right: theme.spacing(11)
  }
}))

export default function ModeSlider() {
  const styles = useStyles()
  const {
    hasViewMode,
    hasDragMode,
    editModeValue,
    handleEditModeValue
  } = useComputer()

  if (!hasViewMode && !hasDragMode) {
    return (
      <div className={styles.slider}>
        <Slider
          value={editModeValue}
          onChange={handleEditModeValue}
          defaultValue={0}
          step={0.01}
          min={0}
          max={1}
        />
      </div>
    )
  }

  return null
}
