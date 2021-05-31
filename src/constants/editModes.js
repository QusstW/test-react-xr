const editModes = [
  {
    name: 'Просмотор',
    value: null,
    icon: './assets/icons/modeIcons/view.svg'
  },
  {
    name: 'Перемещение',
    value: 1,
    icon: './assets/icons/modeIcons/move.svg'
  },
  {
    name: 'Масштабирование',
    value: 2,
    icon: './assets/icons/modeIcons/scale.svg'
  },
  {
    name: 'Поворот по X',
    value: 3,
    icon: './assets/icons/modeIcons/rotateX.svg'
  },
  {
    name: 'Поворот по Y',
    value: 4,
    icon: './assets/icons/modeIcons/rotateY.svg'
  },
  {
    name: 'Поворот по Z',
    value: 5,
    icon: './assets/icons/modeIcons/rotateZ.svg'
  }
]

export default editModes

export const hasViewMode = (mode) => mode === null
export const hasDragMode = (mode) => mode === 1
export const hasScaleMode = (mode) => mode === 2
