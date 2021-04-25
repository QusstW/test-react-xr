const categories = [
  {
    id: 'mother',
    name: 'Материнские платы',
    required: []
  },
  {
    id: 'videocard',
    name: 'Видекарты',
    required: ['mother']
  },
  {
    id: 'processor',
    name: 'Процессоры',
    required: ['mother']
  },
  {
    id: 'powerSupply',
    name: 'Блоки питания',
    required: ['mother', 'videocard']
  }
]

export default categories
