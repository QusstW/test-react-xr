import React from 'react'

import ComputerProvider from '../providers/ComputerProvider'
import Navigation from './navigation'

export default function App() {
  return (
    <ComputerProvider>
      <Navigation />
    </ComputerProvider>
  )
}
