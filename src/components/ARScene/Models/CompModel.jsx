import React, { Suspense } from "react";
import Model from "../../../assets/models/MainCase.glb";
import { Interactive } from "@react-three/xr";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { MotherBoard } from "./MotherBoard";
import  {Videocard} from "./VideoCard"
import {Processor} from "./Processor"

export const CompModel = ({ position, setSubjectId, clickMother, clickVideo, clickProcessor }) => {
  const gltf = useLoader(GLTFLoader, Model);
  console.log(position)
  return (
    <>
      <group position={position}>
        <Interactive onSelect={() => setSubjectId(1)}>
          <primitive
            object={gltf.scene}
            scale={[5, 5, 5]}
          />
        </Interactive>
        {clickMother ? (
          <Suspense fallback={"F"}>
            <MotherBoard />
          </Suspense>
        ) : null}

        {clickVideo ? (
          <Suspense fallback={"F"}>
            <Videocard />
          </Suspense>
        ) : null
        }
        {clickProcessor ? (
          <Suspense fallback={"G"}>
            <Processor />
          </Suspense>
        ) : null
        }

      </group>
    </>
  );
};
