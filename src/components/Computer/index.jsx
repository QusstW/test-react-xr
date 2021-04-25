import React from 'react'

import ComputerBox from './extra/ComputerBox'
import ComputerElement from './extra/ComputerElement'

import useCustomDrag from '../../hooks/useCustomDrag'

export default function Computer({
  computerProps,
  setPosition,
  onComputerPress,
  box,
  elements,
  hasDragMode
}) {
  const { position } = computerProps
  const bind = useCustomDrag({
    hasDragMode,
    usePosition: [position, setPosition]
  })

  // 5, 5, 5

  return (
    <>
      <group {...computerProps} {...bind()}>
        <group position={[-0.001, -0.001, -0.001]}>
          <ComputerBox onClick={onComputerPress} box={box} />
          {elements.map((el) => (
            <ComputerElement element={el} key={`element-${el.id}`} />
          ))}
        </group>
      </group>
    </>
  )
}
