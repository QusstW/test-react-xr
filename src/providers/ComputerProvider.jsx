import React, { createContext, useState, useMemo } from 'react'

import { useSnackbar } from 'notistack'

import {
  CATEGORIES,
  BOXES,
  ELEMENTS,
  hasDragMode,
  hasScaleMode,
  hasViewMode
} from '../constants'

export const ComputerContext = createContext()

export default function ComputerProvider(props) {
  const { enqueueSnackbar } = useSnackbar()

  const [box, setBox] = useState(null)
  const [elements, setElements] = useState([])
  const [editMode, setEditMode] = useState(null)
  const [addedElements, setAddedElements] = useState([])

  const [position, setPoistion] = useState([0, 0, 0])
  const [scale, setScale] = useState(1)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [rotateZ, setRotateZ] = useState(0)

  const toggleElement = (elementId) => {
    //ищет в массиве объектов объект с id равным id который пришёл в пропсах(elementId)
    const element = ELEMENTS.find((el) => el.id === elementId)

    // получаем тип найденного объекта
    const { type } = element
    /**
     * Если в массиве elements есть объект с id = elementId возвращает этот объект
     * Если такого объекта нет возвращает false
     */
    const hasRemoveMode = elements.indexOf(elementId) !== -1
    /**
     * Если hasRemoveMode содержит в себе объект - в массив elements записывается
     */
    if (hasRemoveMode) {
      setElements(elements.filter((id) => id !== elementId))
      enqueueSnackbar(`Объект ${element.name} успешно удален`, {
        variant: 'success'
      })
    } else {
      let output = JSON.parse(JSON.stringify(elements))

      const hasSelectedType =
        selectedElements.map((el) => el.type).indexOf(type) !== -1

      if (hasSelectedType) {
        const { id: selectedId } = selectedElements.find(
          (el) => el.type === type
        )
        output = output.filter((id) => id !== selectedId)
      }
      setElements([...output, elementId])
      enqueueSnackbar(`Объект ${element.name} успешно добавлен`, {
        variant: 'success'
      })
    }
  }

  const handleSetBox = (boxId) => {
    enqueueSnackbar(!box ? `Корпус успешно выбран` : 'Корпус успешно сменен', {
      variant: 'success'
    })
    setBox(boxId)
  }

  const selectedElements = useMemo(() => {
    if (elements.length) {
      return ELEMENTS.filter((el) => elements.indexOf(el.id) !== -1)
    }

    return []
  }, [elements])

  /**
   * Меморизированное значение коробки
   * Отслеживает выбранный ID коробки
   * Возвращает объект коробки при выбранном ID
   */
  const selectedBox = useMemo(() => {
    if (box) {
      return BOXES.find((b) => box === b.id)
    }

    return null
  }, [box])

  // 0, 1
  // 0, 2 * Math.PI

  const handleEditModeValue = (event, value) => {
    switch (editMode) {
      case 2:
        setScale(value * 5)
        break
      case 3:
        setRotateX(Math.PI * 2 * value)
        break
      case 4:
        setRotateY(Math.PI * 2 * value)
        break
      case 5:
        setRotateZ(Math.PI * 2 * value)
        break
      default:
        break
    }
  }

  const editModeValue = () => {
    switch (editMode) {
      case 2:
        return scale / 5
      case 3:
        return rotateX / Math.PI / 2
      case 4:
        return rotateY / Math.PI / 2
      case 5:
        return rotateZ / Math.PI / 2
      default:
        return 0
    }
  }

  const searchType = (type) => selectedElements.find((el) => el.type === type)

  const progress = useMemo(() => {
    let value = 0 // max 6
    let color = 'red'

    if (box) value += 1

    CATEGORIES.forEach((c) => {
      if (searchType(c.id)) value += 1
    })

    if (value) {
      if (value < CATEGORIES.length + 1) color = 'orange'
      else color = 'green'
    }

    if (value === CATEGORIES.length + 1) {
      enqueueSnackbar(`Поздавляем, компъютер успешно собран`, {
        variant: 'success'
      })
    }

    return {
      color,
      value: parseInt((value / (CATEGORIES.length + 1)) * 100, 10)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [box, elements])

  return (
    <ComputerContext.Provider
      value={{
        progress,
        //
        elements,
        selectedElements,
        toggleElement,
        searchType,
        //
        box,
        selectedBox,
        setBox: handleSetBox,
        //
        editMode,
        setEditMode,
        hasViewMode: hasViewMode(editMode),
        hasDragMode: hasDragMode(editMode),
        hasScaleMode: hasScaleMode(editMode),
        computerProps: {
          position,
          scale: [scale, scale, scale],
          rotation: [rotateX, rotateY, rotateZ]
        },
        setComputerPosition: setPoistion,
        editModeValue: editModeValue(),
        handleEditModeValue
      }}
      {...props}
    />
  )
}
