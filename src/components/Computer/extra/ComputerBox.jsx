import React, { Suspense } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

// Рендер корпуса компьютера исходя из состояния найденного корпуса
const AsyncComputerBox = ({ box, onClick }) => {
  const gltf = useLoader(GLTFLoader, box.data.object)
  console.log(gltf)
  return <primitive object={gltf.scene} scale={[5, 5, 5]} onClick={onClick} />
}

//Рендер крышки компьютера исходя из состояния открытости
const AsyncComputerCup = ({ box }) => {
  const gltf = useLoader(GLTFLoader, box.data.cup)
  return <primitive object={gltf.scene} scale={[5, 5, 5]} />
}

export default function ComputerBox({ box, onClick = () => {}, boxOpen }) {
  // console.log(models)

  if (box) {
    return (
      <Suspense fallback={() => {}}>
        <AsyncComputerBox onClick={onClick} box={box} key={`box${box.id}`} />
        {!boxOpen ? <AsyncComputerCup box={box} boxOpen={boxOpen} /> : null}
      </Suspense>
    )
  }

  return null
}
