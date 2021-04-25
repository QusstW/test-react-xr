import React, { createContext, useState, useMemo } from 'react'

import {
  BOXES,
  ELEMENTS,
  hasDragMode,
  hasScaleMode,
  hasViewMode
} from '../constants'

export const ComputerContext = createContext()

export default function ComputerProvider(props) {
  const [box, setBox] = useState(null)
  const [elements, setElements] = useState([])
  const [editMode, setEditMode] = useState(null)

  const [position, setPoistion] = useState([0, 0, 0])
  const [scale, setScale] = useState(1)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [rotateZ, setRotateZ] = useState(0)

  const toggleElement = (elementId) => {
    const element = ELEMENTS.find((el) => el.id === elementId)
    const { type } = element

    const hasRemoveMode = elements.indexOf(elementId) !== -1

    if (hasRemoveMode) setElements(elements.filter((id) => id !== elementId))
    else {
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
    }
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

  const progress = () => {
    let value = 0 // max 6
    let color = 'red'

    if (box) value += 1
    if (selectedElements.find((el) => el.type === 'videocard')) value += 1

    switch (value) {
      case 1:
        color = 'orange'
        break
      case 2:
        color = 'green'
        break
      default:
        break
    }

    return {
      color,
      value: parseInt((value / 6) * 100, 10)
    }
  }

  return (
    <ComputerContext.Provider
      value={{
        progress: progress(),
        //
        elements,
        selectedElements,
        toggleElement,
        //
        box,
        selectedBox,
        setBox,
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
