import React, { useEffect, useState, useMemo } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  //
  Grid
  //
} from '@material-ui/core'

import useComputer from '../../../hooks/useComputer'
import useElementsCategory from '../../../hooks/useElementsCategory'

import BoxesList from './extra/BoxesList'
import ElementsList from './extra/ElementsList'

const ElementsModal = ({
  isOpen,
  onClose,
  hasBox = true,
  selectedCategory
}) => {
  const { selectedBox } = useComputer()

  const selectedCategoryObj = useElementsCategory(selectedCategory)

  const [show, setShow] = useState(false)

  useEffect(() => {
    if (isOpen) setShow(true)
  }, [isOpen])

  const handleClose = () => {
    setShow(false)
    onClose()
  }

  const title = () => {
    if (hasBox) return 'Выбор коробки'
    if (selectedCategory) return selectedCategoryObj.name
    return 'Выберите комплектующие'
  }

  return (
    <>
      <Dialog
        open={show}
        onExited={handleClose}
        disableBackdropClick={hasBox && !selectedBox}
        fullWidth
        maxWidth='md'
      >
        <DialogTitle>{title()}</DialogTitle>
        {isOpen && (
          <DialogContent>
            {hasBox ? (
              <BoxesList />
            ) : (
              <ElementsList selectedCategory={selectedCategory} />
            )}
          </DialogContent>
        )}
        <DialogActions>
          <Button
            color='primary'
            onClick={handleClose}
            disabled={hasBox && !selectedBox}
          >
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ElementsModal
