import React from 'react'

export default function MappingObject(props) {
  return (
    <mesh {...props}>
      <boxGeometry args={[0.8, 0.8, 0.2, 4, 4, 4]} />
      <meshStandardMaterial color='#ffffff' wireframe />
    </mesh>
  )
}
