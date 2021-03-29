import React from 'react'
import { useFBX } from '@react-three/drei'
import Model from '../../../assets/models/maya2sketchfab.fbx'

 export  const CompModel = (props) => {
   console.log("ya tyta")
    const fbx = useFBX(Model)
    return (
      <primitive object={fbx} {...props} scale={[0.05,0.05, 0.05]} />
    )
  }