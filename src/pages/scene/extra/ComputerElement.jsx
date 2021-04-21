import React, { Suspense, useEffect } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const AsyncComputerElement = ({ element }) => {
  const { data } = element
  const { scale, object } = data
  const formattedScale = scale ? [scale, scale, scale] : [1, 1, 1]

  const gltf = useLoader(GLTFLoader, object)

  console.log(gltf)
  return <primitive object={gltf.scene} scale={formattedScale} />
}

export default function ComputerElement({ element }) {
  return (
    <Suspense fallback={() => {}}>
      <AsyncComputerElement element={element} />
    </Suspense>
  )
}
