import React from 'react'
import { useFBX } from '@react-three/drei'
import Model from '../../../assets/models/main_case.fbx'
import { Interactive } from "@react-three/xr";
 export  const CompModel = (props) => {
   console.log("ya tyta")
    const fbx = useFBX(Model)
    return (
      <Interactive
      onSelect={ ()=>{
        console.log('u are clicked to comuter case')
       } }
      >
        <primitive object={fbx} {...props} scale={[0.05,0.05, 0.05]} />
      </Interactive>
      
    )
  }