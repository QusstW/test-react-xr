import React from 'react'
import { Canvas, useResource } from 'react-three-fiber'

import Camera from '../../components/Camera'
import Computer from './extra/Computer'
import useComputer from '../../hooks/useComputer'
import Fabs from './extra/Fabs'
import ModeSlider from './extra/ModeSlider'

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
    <>
      <Canvas style={{ width: '100vw', height: '100vh' }}>
        <Camera ref={camera} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Computer
          computerProps={computerProps}
          setPosition={setComputerPosition}
          elements={selectedElements}
          box={selectedBox}
          onComputerPress={() => {}}
          hasDragMode={hasDragMode}
        />
      </Canvas>
      <Fabs />
      <ModeSlider />
    </>
  )
}
