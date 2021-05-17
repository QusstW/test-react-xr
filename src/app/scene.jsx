import React from 'react'
import { Canvas, useResource } from 'react-three-fiber'

import { Camera, Computer, Light, Grid, MappingObject } from '../components'
import { useComputer } from '../hooks'

export default function SceneScreen() {
  const camera = useResource()

  const {
    selectedBox,
    selectedElements,
    hasDragMode,
    computerProps,
    setComputerPosition,
    boxOpen
  } = useComputer()

  return (
    <Canvas id='scene' onCreated={(state) => state.gl.setClearColor('#353535')}>
      {/* <axesHelper size={20} />
      <Grid />
      <MappingObject {...computerProps} /> */}
      <Camera ref={camera} />
      <Light />
      <Computer
        computerProps={computerProps}
        setPosition={setComputerPosition}
        elements={selectedElements}
        box={selectedBox}
        onComputerPress={() => {}}
        hasDragMode={hasDragMode}
        boxOpen={boxOpen}
      />
    </Canvas>
  )
}
