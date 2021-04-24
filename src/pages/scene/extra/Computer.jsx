import React from 'react'
import { useThree } from 'react-three-fiber'
import { useDrag } from 'react-use-gesture'
import ComputerBox from './ComputerBox'
import ComputerElement from './ComputerElement'

export default function Computer({
  position,
  setPosition,
  onComputerPress,
  box,
  elements,
  editMode
}) {
  const { size, viewport } = useThree()
  const aspect = size.width / viewport.width
  const bind = useDrag(
    ({ offset: [x, y] }) => {
      if (editMode === 1) {
        console.log(position)
        const [, , z] = position
        setPosition([x / aspect, -y / aspect, z])
      }
    },
    { pointerEvents: true }
  )

  return (
    <>
      <group position={position} {...bind()}>
        <ComputerBox onClick={onComputerPress} box={box} />
        {elements.map((el) => (
          <ComputerElement element={el} key={`element-${el.id}`} />
        ))}
      </group>
    </>
  )
}
