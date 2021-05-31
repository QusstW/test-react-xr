import React from 'react'
import * as THREE from 'three'
import { useHitTest } from '@react-three/xr'

import ComputerBox from './extra/ComputerBox'
import ComputerElement from './extra/ComputerElement'
import MappingObject from '../MappingObject'

export default function Computer({
  computerProps,
  onComputerPress,
  box,
  elements,
  hasDragMode,
  setPosition,
  boxOpen
}) {
  // 5, 5, 5

  useHitTest((hit) => {
    if (!hasDragMode) return

    const position = new THREE.Vector3()
    const rotation = new THREE.Quaternion()
    const scale = new THREE.Vector3()

    hit.decompose(position, rotation, scale)

    const { x, y, z } = position
    if (position) setPosition([x, y, z])
  })

  if (hasDragMode) {
    return <MappingObject {...computerProps} />
  }

  return (
    <group {...computerProps}>
      <ComputerBox onClick={onComputerPress} box={box} boxOpen={boxOpen} />
      {elements.map((el) => (
        <ComputerElement element={el} key={`element-${el.id}`} />
      ))}
    </group>
  )
}
