import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { ARScene } from './components/ARScene/ARScene'
import NavMenu from './components/NavMenu/NavMenu'
import Description from './components/Description/Description'





function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <Route path="/Description" component={Description} />
      <Route path="/AR" component={ARScene} />
    </BrowserRouter>
  )
}

export default App