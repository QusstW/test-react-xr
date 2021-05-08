const categories = [
  {
    id: 'mother',
    name: 'Материнские платы',
    icon: './assets/icons/accoriesIcons/motherboard.svg',
    required: []
  },
  {
    id: 'videocard',
    name: 'Видекарты',
    icon: './assets/icons/accoriesIcons/videocard.svg',
    required: ['mother']
  },
  {
    id: 'processor',
    name: 'Процессоры',
    icon: './assets/icons/accoriesIcons/processor.svg',
    required: ['mother']
  },
  {
    id: 'powerSupply',
    name: 'Блоки питания',
    icon: './assets/icons/accoriesIcons/powerSupply.svg',
    required: ['mother', 'videocard']
  }
]

export default categories
