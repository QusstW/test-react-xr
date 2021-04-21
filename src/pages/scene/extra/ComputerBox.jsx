import React, { Suspense } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const AsyncComputerBox = ({ box, onClick }) => {
  const gltf = useLoader(GLTFLoader, box.data.object)
  return <primitive object={gltf.scene} scale={[5, 5, 5]} onClick={onClick} />
}

export default function ComputerBox({ box, onClick = () => {} }) {
  // console.log(models)

  if (box) {
    return (
      <Suspense fallback={() => {}}>
        <AsyncComputerBox onClick={onClick} box={box} />
      </Suspense>
    )
  }

  return null
}
