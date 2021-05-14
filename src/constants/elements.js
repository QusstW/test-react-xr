const elements = [
  {
    id: 1,
    type: 'mother',
    name: 'ASUS-OMG',
    image: './assets/images/AccessoriesPC/MotherBoard.jpg',
    data: {
      object: './assets/models/MotherBoard.glb',
      scale: 5
    },
    args: {
      processor: {
        socket: 123
      },
      videocard: {
        port: 'pci-e-3'
      }
    },
    beforeMount: [],
    beforeDelete: ['processor', 'videocard']
  },
  {
    id: 2,
    type: 'videocard',
    name: 'Nvidea GTX-2070',
    image: './assets/images/AccessoriesPC/VideoCard.jpg',
    data: {
      object: './assets/models/rtx2080ti.glb',
      scale: 5
    },
    args: {
      port: 'pci-e-3'
    },
    beforeMount: ['mother'],
    beforeDelete: []
  },
  {
    id: 3,
    type: 'processor',
    name: 'intelCore i-5',
    image: './assets/images/AccessoriesPC/Processor.jpeg',
    data: {
      object: './assets/models/Processor.glb',
      scale: 5
    },
    args: {
      socket: 123
    },
    beforeMount: ['mother'],
    beforeDelete: []
  },
  {
    id: 4,
    type: 'powerSupply',
    name: 'VX PLUS-700',
    image: './assets/images/AccessoriesPC/PowerSupy.jpg',
    data: {
      object: './assets/models/SSD.glb',
      scale: 5
    },
    args: {},
    beforeMount: [],
    beforeDelete: []
  },
  {
    id: 5,
    type: 'mother',
    name: 'NEXTZ',
    image: './assets/images/AccessoriesPC/MotherBoard.jpg',
    data: {
      object: './assets/models/MotherBoards_NEXTZ.glb',
      scale: 5
    },
    args: {},
    beforeMount: [],
    beforeDelete: []
  }
]

export default elements
