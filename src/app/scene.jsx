import React from 'react'
import { ARCanvas } from '@react-three/xr'

import { Computer, HitTestExample, Light } from '../components'
import { useComputer } from '../hooks'

export default function SceneScreen() {
  const {
    selectedBox,
    selectedElements,
    hasDragMode,
    computerProps,
    setComputerPosition,
    setElementsModal
  } = useComputer()

  return (
    <ARCanvas
      sessionInit={{
        requiredFeatures: ['hit-test'],
        optionalFeatures: ['dom-overlay'],
        domOverlay: { root: document.body }
      }}
    >
      <Light />
      <Computer
        computerProps={computerProps}
        setPosition={setComputerPosition}
        elements={selectedElements}
        box={selectedBox}
        onComputerPress={() => {}}
        hasDragMode={hasDragMode}
      />
      <HitTestExample
        setPosition={setComputerPosition}
        setElementsModal={setElementsModal}
      />
    </ARCanvas>
  )
}
