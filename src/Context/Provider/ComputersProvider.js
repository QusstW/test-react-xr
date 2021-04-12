import React, { useState } from "react"
import {ComputersContext} from "../ComputersContext"

const ComputersProvider = ( {children} ) => {
    
    const [position, setPosition] = useState();
    const [clicked, setClicked] = useState(false);
  
    const [subjectId, setSubjectId] = useState(null);
  
    const [clickMother, setClickMother] = useState(false);
    const [clickVideo, setClickVideo] = useState(false)
    const [clickProcessor, setClickProcessor] = useState(false)

    return(
        <ComputersContext.Provider value={{position, setPosition, clicked, setClicked, subjectId, setSubjectId, clickMother, setClickMother, clickVideo, setClickVideo, clickProcessor, setClickProcessor}}>
            {children}
        </ComputersContext.Provider>
    )
}

export default ComputersProvider