import React, { createContext, useState, useMemo } from 'react'

import { BOXES, ELEMENTS } from '../constants'

export const ComputerContext = createContext()

export default function ComputerProvider(props) {
  const [box, setBox] = useState(null)
  const [elements, setElements] = useState([])

  const [editMode, setEditMode] = useState(null)

  const toggleElement = (elementId) => {
    console.log(
      elements.indexOf(elementId) !== -1
        ? elements.filter((id) => id !== elementId)
        : [...elements, elementId]
    )
    setElements(
      elements.indexOf(elementId) !== -1
        ? elements.filter((id) => id !== elementId)
        : [...elements, elementId]
    )
  }

  const selectedElements = useMemo(() => {
    if (elements.length) {
      return ELEMENTS.filter((el) => elements.indexOf(el.id) !== -1)
    }

    return []
  }, [elements])

  const selectedBox = useMemo(() => {
    if (box) {
      return BOXES.find((b) => box === b.id)
    }

    return null
  }, [box])

  return (
    <ComputerContext.Provider
      value={{
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
        setEditMode
      }}
      {...props}
    />
  )
}
