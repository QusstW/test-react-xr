const editModes = [
  {
    name: 'Просмотор',
    value: null
  },
  {
    name: 'Перемещение',
    value: 1
  },
  {
    name: 'Масштабирование',
    value: 2
  },
  {
    name: 'Поворот по X',
    value: 3
  },
  {
    name: 'Поворот по Y',
    value: 4
  },
  {
    name: 'Поворот по Z',
    value: 5
  }
]

export default editModes

export const hasViewMode = (mode) => mode === null
export const hasDragMode = (mode) => mode === 1
export const hasScaleMode = (mode) => mode === 2
