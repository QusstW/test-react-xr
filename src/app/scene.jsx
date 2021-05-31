import React from 'react'

import { ARCanvas } from '@react-three/xr'

import { Computer, Light } from '../components'
import { useComputer } from '../hooks'

export default function SceneScreen() {
  // const camera = useResource()

  const {
    selectedBox,
    selectedElements,
    hasDragMode,
    computerProps,
    boxOpen,
    setComputerPosition
  } = useComputer()

  return (
    /**
     * в канвас
     * onCreated={(state) => state.gl.setClearColor('#353535')}
     */

    <ARCanvas
      id='scene'
      sessionInit={{
        requiredFeatures: ['hit-test'],
        optionalFeatures: ['dom-overlay'],
        domOverlay: { root: document.body }
      }}
    >
      {/* <Camera ref={camera} /> */}
      {/* <Grid /> */}
      <Light />
      <Computer
        computerProps={computerProps}
        elements={selectedElements}
        box={selectedBox}
        onComputerPress={() => {}}
        hasDragMode={hasDragMode}
        boxOpen={boxOpen}
        setPosition={setComputerPosition}
      />
    </ARCanvas>
  )
}
