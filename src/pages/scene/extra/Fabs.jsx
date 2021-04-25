import React, { useState, useEffect } from 'react'
import { Fab, Menu, MenuItem, Typography } from '@material-ui/core'
import {
  Category as CategoryIcon,
  TouchApp as TouchAppIcon,
  Check as CheckIcon
} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

import { CATEGORIES, EDIT_MODES } from '../../../constants'
import ElementsModal from '../../../components/modals/ElementsModal'
import useComputer from '../../../hooks/useComputer'

const useStyles = makeStyles((theme) => ({
  categoryFab: {
    position: 'absolute',
    bottom: theme.spacing(3),
    right: theme.spacing(3)
  },
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

export default function Fabs() {
  const styles = useStyles()
  const { editMode, setEditMode } = useComputer()

  // ELEMENTS MODAL
  const [categoryMenu, setCategoryMenu] = useState()
  const [elementsModal, setElementsModal] = useState(false)
  const [hasBoxMode, setBoxMode] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleCloseModal = () => {
    if (hasBoxMode) setBoxMode(false)
    if (selectedCategory) setSelectedCategory(null)
    setElementsModal(false)
  }

  const handleSelectCategory = (category) => {
    setCategoryMenu(null)
    setSelectedCategory(category)
    setElementsModal(true)
  }

  useEffect(() => {
    setTimeout(() => {
      setElementsModal(true)
    }, 2e3)
  }, [])

  const renderCategoryMenu = () => {
    return (
      <>
        <Fab
          className={styles.categoryFab}
          color='primary'
          aria-controls='elements-menu'
          onClick={(e) => setCategoryMenu(e.currentTarget)}
        >
          <CategoryIcon />
        </Fab>
        <Menu
          id='elements-menu'
          anchorEl={categoryMenu}
          keepMounted
          open={Boolean(categoryMenu)}
          onClose={() => setCategoryMenu(null)}
        >
          {CATEGORIES.map((c, index) => (
            <MenuItem key={index} onClick={() => handleSelectCategory(c.id)}>
              {c.name}
            </MenuItem>
          ))}
        </Menu>
        <ElementsModal
          isOpen={elementsModal}
          onClose={handleCloseModal}
          hasBox={hasBoxMode}
          selectedCategory={selectedCategory}
        />
      </>
    )
  }

  const [modeMenu, setModeMenu] = useState()
  const handleSelectMode = (mode) => {
    setEditMode(mode)
    setModeMenu(null)
  }

  const renderModeMenu = () => {
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

  return (
    <>
      {renderCategoryMenu()}
      {renderModeMenu()}
    </>
  )
}
