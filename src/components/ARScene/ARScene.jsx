import React, { Suspense, useState } from "react";
import { ARCanvas } from "@react-three/xr";
import { HitTestExample } from "./HitTestExample";
import { CompModel } from "./CompModel";
import MainWindow from "../ModalWindow/MainWindow";

const AROVerlay = document.getElementsByTagName("body")[0];

export const ARScene = () => {
  const [position, setPosition] = useState();
  const [clicked, setClicked] = useState(false);
  const [subjectId, setSubjectId] = useState(null);

  const [selectedModels, setSelectedModels] = useState([])

  return (
    <>
      <ARCanvas
        sessionInit={{
          requiredFeatures: ["hit-test"],
          domOverlay: { root: AROVerlay },
          optionalFeatures: ["dom-overlay"],
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} />
        {clicked ? (
          <Suspense fallback={"F"}>
            <CompModel
              position={position}
              setSubjectId={setSubjectId}
              models={selectedModels}
            />
          </Suspense>
        ) : null}
        <HitTestExample setClicked={setClicked} setPosition={setPosition} />
      </ARCanvas>
      <MainWindow
        subjectId={subjectId}
        onClose={() => setSubjectId(null)}
        useModels={() => [selectedModels, setSelectedModels]}
      />
    </>
  );
};
