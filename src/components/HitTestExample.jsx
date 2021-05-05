import React from 'react'
import { Interactive, useHitTest } from '@react-three/xr'
import { useResource } from 'react-three-fiber'
import { Circle } from '@react-three/drei'

export default function HitTestExample({ setPosition, setElementsModal }) {
  const ref = useResource()

  useHitTest((hit) => {
    hit.decompose(ref.current.position, ref.current.rotation, ref.current.scale)
  })

  return (
    <>
      <Interactive
        onSelect={() => {
          setPosition([
            ref.current.position.x,
            ref.current.position.y,
            ref.current.position.z
          ])
          setElementsModal(true)
        }}
      >
        <Circle ref={ref} args={[0.1, 0.1, 0.1]} />
      </Interactive>
      )
    </>
  )
}
