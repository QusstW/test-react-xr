import React from 'react'
import { Canvas, useResource } from 'react-three-fiber'

import { Camera, Computer, Light } from '../components'
import { useComputer } from '../hooks'

export default function SceneScreen() {
  const camera = useResource()

  const {
    selectedBox,
    selectedElements,
    hasDragMode,
    computerProps,
    setComputerPosition
  } = useComputer()

  return (
    <Canvas id='scene'>
      <Camera ref={camera} />
      <Light />
      <Computer
        computerProps={computerProps}
        setPosition={setComputerPosition}
        elements={selectedElements}
        box={selectedBox}
        onComputerPress={() => {}}
        hasDragMode={hasDragMode}
      />
    </Canvas>
  )
}
