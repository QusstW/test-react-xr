import React from "react";
import { Interactive } from "@react-three/xr";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import ModelComponent from "./ModelComponent";

export const CompModel = ({ position, setSubjectId, models, currentCase }) => {
  const gltf = useLoader(GLTFLoader, currentCase);
  return (
    <>
      <group position={position}>
        <Interactive onSelect={() => setSubjectId(1)}>
          <primitive object={gltf.scene} scale={[5, 5, 5]} />
        </Interactive>
        {models.map((model, index) => (
          <ModelComponent key={index} model={model} />
        ))}
      </group>
    </>
  );
};
