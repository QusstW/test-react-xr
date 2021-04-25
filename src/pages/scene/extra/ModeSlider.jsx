import React from 'react'
import { Slider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import useComputer from '../../../hooks/useComputer'

const useStyles = makeStyles((theme) => ({
  slider: {
    position: 'absolute',
    top: theme.spacing(9),
    bottom: theme.spacing(4),
    left: theme.spacing(2)
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
          orientation='vertical'
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
