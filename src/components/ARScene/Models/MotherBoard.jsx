import React from "react";
import Model from "../../../assets/models/MotherBoard.glb";
import { Interactive } from "@react-three/xr";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const MotherBoard = () => {
    const gltf = useLoader(GLTFLoader, Model);
    return (
      <Interactive>
        <primitive
          object={gltf.scene}
          // position={[-0.018, 0, -0.35]}
          scale={[5, 5, 5]}
        />
      </Interactive>
    );
  };