import React, { createContext, useState, useMemo } from 'react'

import { useSnackbar } from 'notistack'

import {
  CATEGORIES,
  BOXES,
  ELEMENTS,
  NOTIFY,
  hasDragMode,
  hasScaleMode,
  hasViewMode
} from '../constants'

export const ComputerContext = createContext()

export default function ComputerProvider(props) {
  const { enqueueSnackbar } = useSnackbar()

  const [box, setBox] = useState(null)
  const [boxOpen, setBoxOpen] = useState(true)
  const [elements, setElements] = useState([])
  const [editMode, setEditMode] = useState(1)

  const [position, setPoistion] = useState([0, 0, 0])
  const [scale, setScale] = useState(1)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [rotateZ, setRotateZ] = useState(0)

  const selectedElements = useMemo(() => {
    if (elements.length) {
      return ELEMENTS.filter((el) => elements.indexOf(el.id) !== -1)
    }

    return []
  }, [elements])

  const getElementByType = (type) => {
    return selectedElements.find((el) => {
      return el.type === type
    })
  }

  const toggleElement = (elementId) => {
    //ищет в массиве объектов объект с id равным id который пришёл в пропсах(elementId)
    const element = ELEMENTS.find((el) => el.id === elementId)
    const { beforeMount, beforeDelete, args: elementArgs } = element

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
      for (let i = 0; i < beforeDelete.length; i++) {
        const key = beforeDelete[i]
        const obj = getElementByType(key)
        if (obj) {
          NOTIFY({
            enqueueSnackbar,
            key: 'UNMOUNT_EL_NOT_FOUND',
            value: key
          })
          return
        }
      }

      setElements(elements.filter((id) => id !== elementId))
      NOTIFY({
        enqueueSnackbar,
        key: 'DELETION_SUCCESSFUL',
        value: element.name
      })
    } else {
      for (let i = 0; i < beforeMount.length; i++) {
        const key = beforeMount[i]
        const obj = getElementByType(key)
        if (!obj) {
          NOTIFY({
            enqueueSnackbar,
            key: 'MOUNT_EL_NOT_FOUND',
            value: key
          })
          return
        }

        console.log(obj.args, element.type)

        if (!obj.args || !obj.args[element.type]) break
        const args = obj.args[element.type]
        const argsKeys = Object.keys(args)

        for (let j = 0; j < argsKeys.length; j++) {
          const argKey = argsKeys[j]
          console.log(argKey)

          if (elementArgs[argKey] !== args[argKey]) {
            NOTIFY({
              enqueueSnackbar,
              key: 'MOUNT_ARG_NOT_FOUND',
              value: [element.type, argKey, args[argKey]]
            })
            return
          }
        }
      }

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
      NOTIFY({
        enqueueSnackbar,
        key: 'ADDED_SECCESSFUL',
        value: element.name
      })
    }
  }

  const handleSetBox = (boxId) => {
    if (!box) {
      NOTIFY({
        enqueueSnackbar,
        key: 'CASE_SUCCESSFUL_CHOOSEN'
      })
    } else {
      NOTIFY({
        enqueueSnackbar,
        key: 'CASE_SUCCESSFUL_CHANGED'
      })
    }
    setBox(boxId)
  }

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
      NOTIFY({
        enqueueSnackbar,
        key: 'BUILD_SUCCESSFUL'
      })
      // enqueueSnackbar(`Поздавляем, компъютер успешно собран`, {
      //   variant: 'success'
      // })
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
        boxOpen,
        setBoxOpen,
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
