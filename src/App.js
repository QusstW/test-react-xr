import React from 'react'



import { CanvasAR } from './components/CanvasAR'






function App() {
  return (
    <CanvasAR />
    // <ARCanvas sessionInit={{ requiredFeatures: ['hit-test'] }}>
    //   <ambientLight />
    //   <pointLight position={[10, 10, 10]} />
    //   <HitTestExample />
    //   <DefaultXRControllers />
    // </ARCanvas>
  )
}

export default App