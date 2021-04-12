import React, { Suspense } from "react";
import { Interactive } from "@react-three/xr";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function ModelComponent({ model }) {
  const { data } = model;
  const { object, scale } = data;

  const gltf = useLoader(GLTFLoader, object);

  return (
    <Suspense fallback="F">
      <Interactive>
        <primitive
          object={gltf.scene}
          scale={scale ? [scale, scale, scale] : undefined}
          position={[0, 0, 0]}
        />
      </Interactive>
    </Suspense>
  );
}
