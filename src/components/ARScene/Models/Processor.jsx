import React from "react";
import Model from "../../../assets/models/Processor.glb";
import { Interactive } from "@react-three/xr";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const Processor = () => {
  const gltf = useLoader(GLTFLoader, Model);

  return (
    <Interactive>
      <primitive
        object={gltf.scene}
        // position={[0, 0, 0]}
        scale={[5, 5, 5]}
      />
    </Interactive>
  );
};
