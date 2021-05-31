import React from 'react'
import GridHelper from '../utils/grid-helper'

export default function Grid() {
  return <primitive object={new GridHelper(10, 50)} position={[0, 0, 0]} />
}
