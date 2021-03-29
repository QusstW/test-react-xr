import React from 'react'
import { useResource } from "react-three-fiber";
import { Interactive, useHitTest } from "@react-three/xr";
import { Circle } from "@react-three/drei";



export const HitTestExample = ( {setPosition, setClicked} ) => {
  const ref = useResource();

  useHitTest((hit) => {
    hit.decompose(
      ref.current.position,
      ref.current.rotation,
      ref.current.scale
    );
  });

  return (
    <Interactive
      onSelect={() => {
        setPosition([ref.current.position.x, ref.current.position.y, ref.current.position.z])
        setClicked(true)
      }}
    >
      <Circle
        ref={ref}
        args={[0.1, 0.1, 0.1]}
      />
    </Interactive>
  )
}