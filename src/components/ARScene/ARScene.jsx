import React, { Suspense, useState } from "react";
import { ARCanvas } from "@react-three/xr";
import { HitTestExample } from './HitTestExample/HitTestExample'
import { CompModel } from './Models/CompModel'



export const ARScene = () => {
  const [position, setPosition] = useState();
  return (
    <ARCanvas sessionInit={{ requiredFeatures: ["hit-test"] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} />
      
      <Suspense fallback={"F"}>
        <CompModel position={position} />
      </Suspense>
      <HitTestExample setPosition={setPosition}/>
    </ARCanvas>
    
  );
};