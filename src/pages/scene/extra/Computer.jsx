import React from 'react'
import ComputerBox from './ComputerBox'
import ComputerElement from './ComputerElement'

export default function Computer({ position, onComputerPress, box, elements }) {
  // console.log(models)

  return (
    <>
      <group position={position}>
        <ComputerBox onClick={onComputerPress} box={box} />
        {elements.map((el) => (
          <ComputerElement element={el} key={`element-${el.id}`} />
        ))}
      </group>
    </>
  )
}
