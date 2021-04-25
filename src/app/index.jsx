import React from 'react'

import { ComputerProvider } from '../providers'
import { Fabs, ModeSlider, Navbar } from '../components'
import Scene from './scene'

export default function App() {
  return (
    <ComputerProvider>
      <Navbar />
      <Scene />
      <Fabs />
      <ModeSlider />
    </ComputerProvider>
  )
}
