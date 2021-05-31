import React from 'react'
<<<<<<< HEAD
import { ARCanvas } from '@react-three/xr'

import { Computer, HitTestExample, Light } from '../components'
import { useComputer } from '../hooks'

export default function SceneScreen() {
=======
import { Canvas } from 'react-three-fiber'

import { ARCanvas } from '@react-three/xr'

import { Camera, Computer, Light, Grid } from '../components'
import { useComputer } from '../hooks'

export default function SceneScreen() {
  // const camera = useResource()

>>>>>>> web
  const {
    selectedBox,
    selectedElements,
    hasDragMode,
    computerProps,
<<<<<<< HEAD
    setComputerPosition,
    setElementsModal
  } = useComputer()

  return (
    <ARCanvas
=======
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
>>>>>>> web
      sessionInit={{
        requiredFeatures: ['hit-test'],
        optionalFeatures: ['dom-overlay'],
        domOverlay: { root: document.body }
      }}
    >
<<<<<<< HEAD
=======
      {/* <Camera ref={camera} /> */}
      {/* <Grid /> */}
>>>>>>> web
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
<<<<<<< HEAD
      <HitTestExample
        setPosition={setComputerPosition}
        setElementsModal={setElementsModal}
      />
=======
>>>>>>> web
    </ARCanvas>
  )
}
