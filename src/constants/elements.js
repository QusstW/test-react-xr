const elements = [
  {
    id: 1,
    type: 'mother',
    name: 'ASUS ROG STRIX B550-A GAMING / SocketAM4',
    image: './assets/images/AccessoriesPC/mb_asus_strix.jpg',
    data: {
      object: './assets/models/mb_asus.glb',
      scale: 5
    },
    args: {
      processor: {
        socket: 'SocketAM4'
      }
    },
    beforeMount: [],
    beforeDelete: ['processor', 'videocard', 'powerSupply', 'ssd']
  },
  {
    id: 2,
    type: 'mother',
    name: 'NZXT N7 Z490 Intel Z490 / LGA1200',
    image: './assets/images/AccessoriesPC/mb_nzxt.jpg',
    data: {
      object: './assets/models/mb_nzxt.glb',
      scale: 5
    },
    args: {
      processor: {
        socket: 'LGA-1200'
      }
    },
    beforeMount: [],
    beforeDelete: []
  },
  {
    id: 3,
    type: 'videocard',
    name: 'Nvidea RTX-2080',
    image: './assets/images/AccessoriesPC/videocard_rtx2080.jpeg',
    data: {
      object: './assets/models/videocard_rtx2080.glb',
      scale: 5
    },
    args: {
      powerSupply: {
        power: '600w'
      }
    },
    beforeMount: ['mother'],
    beforeDelete: []
  },
  {
    id: 4,
    type: 'videocard',
    name: 'Nvidea RTX-3080',
    image: './assets/images/AccessoriesPC/videocard_rtx3080.png',
    data: {
      object: './assets/models/videocard_rtx3080.glb',
      scale: 5
    },
    args: {
      powerSupply: {
        power: '750w'
      }
    },
    beforeMount: ['mother'],
    beforeDelete: []
  },
  {
    id: 5,
    type: 'processor',
    name: 'INTEL Core i3 10100F, LGA 1200',
    image: './assets/images/AccessoriesPC/processor_lga1200.jpg',
    data: {
      object: './assets/models/processor.glb',
      scale: 5
    },
    args: {
      socket: 'LGA-1200'
    },
    beforeMount: ['mother'],
    beforeDelete: []
  },
  {
    id: 6,
    type: 'processor',
    name: 'AMD Ryzen 7 3700X, SocketAM4',
    image: './assets/images/AccessoriesPC/processor_soketAM4.jpg',
    data: {
      object: './assets/models/processor.glb',
      scale: 5
    },
    args: {
      socket: 'SocketAM4'
    },
    beforeMount: ['mother'],
    beforeDelete: []
  },
  {
    id: 7,
    type: 'powerSupply',
    name: 'AEROCOOL VX PLUS 600W / 600Вт',
    image: './assets/images/AccessoriesPC/powerSupply_600w.jpg',
    data: {
      object: './assets/models/power_supply_one.glb',
      scale: 5
    },
    args: {
      power: '600w'
    },
    beforeMount: ['mother', 'videocard'],
    beforeDelete: []
  },
  {
    id: 8,
    type: 'powerSupply',
    name: 'COOLER MASTER V Gold V2 WHITE CASE / 750Вт',
    image: './assets/images/AccessoriesPC/powerSupply_750w.jpg',
    data: {
      object: './assets/models/power_supply_two.glb',
      scale: 5
    },
    args: {
      power: '750w'
    },
    beforeMount: ['mother', 'videocard'],
    beforeDelete: []
  },
  {
    id: 9,
    type: 'ssd',
    name: 'SAMSUNG 870 EVO MZ-77E250BW 250ГБ',
    image: './assets/images/AccessoriesPC/ssd_samsung.jpg',
    data: {
      object: './assets/models/ssd_samsung.glb',
      scale: 5
    },
    args: {},
    beforeMount: ['mother'],
    beforeDelete: []
  },
  {
    id: 10,
    type: 'ssd',
    name: 'KINGSTON A400 SA400S37/480G 480ГБ',
    image: './assets/images/AccessoriesPC/ssd_kingston.jpg',
    data: {
      object: './assets/models/ssd_kingstone.glb',
      scale: 5
    },
    args: {},
    beforeMount: ['mother'],
    beforeDelete: []
  }
]

export default elements
