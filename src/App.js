import React from 'react'
import { Route } from 'react-router-dom'
import { ARScene } from './components/ARScene/ARScene'
import NavMenu from './components/NavMenu/NavMenu'
import Description from './components/Description/Description'
import HomePage from './components/HomePage/HomePage'


navigator.xr.addEventListener('sessionstart', (e) => {
  console.log(e, navigator.xr)
})

function App() {

  return (
    <>
    
      <NavMenu />
      <Route path="/home" component={HomePage} />
      <Route path="/Description" component={Description} />
      <Route path="/AR" component={ARScene} />
    </>
    
  )
}

export default App