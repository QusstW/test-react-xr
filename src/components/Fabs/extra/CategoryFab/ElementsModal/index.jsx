import React, { useEffect, useState } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
  //

  //
} from '@material-ui/core'

import { useComputer, useElementsCategory } from '../../../../../hooks'

import BoxesList from './extra/BoxesList'
import ElementsList from './extra/ElementsList'

const ElementsModal = ({
  isOpen,
  onClose,
  hasBox = true,
  selectedCategory
}) => {
  const { selectedBox } = useComputer()

  /**
   * получает объект текущей категории по id
   * selectedCategoryObj = {id, name}
   */
  const selectedCategoryObj = useElementsCategory(selectedCategory)

  const [show, setShow] = useState(false)

  useEffect(() => {
    if (isOpen) setShow(true)
  }, [isOpen])

  const handleClose = () => {
    setShow(false)
    onClose()
  }

  /**
   * Рендерит титуль исходя из состояний hasBox и selectedCategory
   */
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
