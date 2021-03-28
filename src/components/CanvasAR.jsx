import React, { useState } from "react";
import { Interactive, useHitTest, ARCanvas } from "@react-three/xr";
import { Box, Circle } from "@react-three/drei";
import { useResource } from "react-three-fiber";

import { useThree } from "react-three-fiber"
import { useGesture } from "react-use-gesture"
import { useSpring } from '@react-spring/core'



















const Button = (props) => {


  // const [hover, setHover] = useState(false);
  // const [color, setColor] = useState(0x123456);



  const { size, viewport } = useThree()
  const aspect = size.width / viewport.width
  const [spring, set] = useSpring(() => ({ scale: [1, 1, 1], position: [0, 0, 0], rotation: [0, 0, 0], config: { friction: 10 } }))
  
  const bind = useGesture({
    onDrag: ({ offset: [x, y] }) => set({ position: [x / aspect, -y / aspect, 0], rotation: [y / aspect, x / aspect, 0] }),
    onHover: ({ hovering }) => set({ scale: hovering ? [1.2, 1.2, 1.2] : [1, 1, 1] })
  })







  return (
    <Interactive
      // onSelect={() => setColor((Math.random() * 0xffffff) | 0)}
      // onHover={() => setHover(true)}
      // onBlur={() => setHover(false)}
      {...spring} {...bind()}
    >
      <Box
        // scale={hover ? [1.5, 1.5, 1.5] : [1, 1, 1]}
        // args={[0.4, 0.1, 0.1]}
        {...props}
      >
        <meshStandardMaterial attach="material"  />
      </Box>
    </Interactive>
  );
};












const HitTestExample = ({ setPosition }) => {
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
        setPosition([ref.current.position.x, ref.current.position.y, ref.current.position.z]);
      }}
    >
      <Circle
        ref={ref}
        args={[0.1, 0.1, 0.1]}
        onClick={(e) => {
          console.log(e);
        }}
      />
    </Interactive>
  );
};











export const CanvasAR = () => {
  const [position, setPosition] = useState();
  return (
    <ARCanvas sessionInit={{ requiredFeatures: ["hit-test"] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} />
      <Button position={position} />

      <HitTestExample setPosition={setPosition} />
    </ARCanvas>
  );
};