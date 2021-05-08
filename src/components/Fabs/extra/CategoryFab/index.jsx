/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import { Fab } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import { CATEGORIES } from '../../../../constants'
import { useComputer } from '../../../../hooks'

import ElementsModal from './ElementsModal'

const useStyles = makeStyles((theme) => ({
  wrapperFab: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    bottom: theme.spacing(2),
    left: theme.spacing(2)
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
      <div className={styles.wrapperFab}>
        {CATEGORIES.map((c, index) => (
          <Fab
            className={styles.fabItem}
            size='small'
            key={index}
            onClick={() => handleSelectCategory(c.id)}
            color={searchType(c.id) ? 'secondary' : 'primary'}
          >
            <img className={styles.imageIcon} src={c.icon} />
          </Fab>
        ))}
      </div>
      <ElementsModal
        isOpen={elementsModal}
        onClose={handleCloseModal}
        hasBox={hasBoxMode}
        selectedCategory={selectedCategory}
      />
    </>
  )
}
/**
 * <Fab
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
 */
