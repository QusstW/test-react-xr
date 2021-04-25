import React, { useState, useEffect } from 'react'
import { Fab, Menu, MenuItem, Typography } from '@material-ui/core'
import {
  Category as CategoryIcon,
  Check as CheckIcon
} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

import { CATEGORIES } from '../../../../constants'
import { useComputer } from '../../../../hooks'

import ElementsModal from './ElementsModal'

const useStyles = makeStyles((theme) => ({
  categoryFab: {
    position: 'absolute',
    bottom: theme.spacing(3),
    right: theme.spacing(3)
  },
  categoryMenuItem: {
    justifyContent: 'space-between'
  },
  categoryMenuItemText: {
    marginRight: theme.spacing(1)
  }
}))

export default function CategoryFab() {
  const styles = useStyles()

  const { searchType } = useComputer()

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

  /**
   * принимает в себя id текущей категории
   * обнуляет состояние Меню категории
   * передаёт полученный id в ElementsModal
   * меняет состояние модального окна  ElementsModal на true
   */

  const handleSelectCategory = (category) => {
    setCategoryMenu(null)
    setSelectedCategory(category)
    setElementsModal(true)
  }

  /**
   * Открывается модальное окно при старте AR-сесии спустя время заданное в setTimeout
   */
  useEffect(() => {
    setTimeout(() => {
      setElementsModal(true)
    }, 2e3)
  }, [])

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
          <MenuItem
            className={styles.categoryMenuItem}
            key={index}
            onClick={() => handleSelectCategory(c.id)}
          >
            <Typography className={styles.categoryMenuItemText}>
              {c.name}
            </Typography>
            {searchType(c.id) && <CheckIcon />}
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
