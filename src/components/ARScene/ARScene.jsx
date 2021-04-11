import React, { Suspense, useState } from "react";
import { ARCanvas } from "@react-three/xr";
import { HitTestExample } from "./HitTestExample/HitTestExample";
import { CompModel } from "./Models/CompModel";
import { MotherBoard } from "./Models/MotherBoard";
import MainWindow from "../ModalWindow/MainWindow";

const AROVerlay = document.getElementsByTagName("body")[0];

export const ARScene = () => {
  const [position, setPosition] = useState();
  const [clicked, setClicked] = useState(false);

  const [subjectId, setSubjectId] = useState(null);

  const [clickMother, setClickMother] = useState(false);
  const [clickVideo, setClickVideo] = useState(false)
  const [clickProcessor, setClickProcessor] = useState(false)
  

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
              setPosition={setPosition}
              setSubjectId={setSubjectId}
              clickMother={clickMother}
              clickVideo={clickVideo}
              clickProcessor={clickProcessor}
            />
          </Suspense>
        ) : null}
        <HitTestExample setClicked={setClicked} setPosition={setPosition} />
      </ARCanvas>
      <MainWindow
        subjectId={subjectId}
        onClose={() => setSubjectId(null)}
        setClickMother={setClickMother}
        setClickVideo={setClickVideo}
        setClickProcessor={setClickProcessor}
      />
    </>
  );
};
