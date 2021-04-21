import React, { forwardRef } from 'react'
import { MapControls, PerspectiveCamera } from '@react-three/drei'

const Camera = forwardRef((props, ref) => {
  return (
    <>
      <PerspectiveCamera
        ref={ref}
        makeDefault
        position={[0, 0, 5]}
        fov={75}
        far={1e6}
        up={[0, 0, 0]}
      />
      <MapControls camera={ref.current} />
    </>
  )
})

export default Camera
