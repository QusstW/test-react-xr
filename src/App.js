import React from 'react'
import { Route } from 'react-router-dom'
import { ARScene } from './components/ARScene/ARScene'
import NavMenu from './components/NavMenu/NavMenu'


navigator.xr.addEventListener('sessionstart', (e) => {
  console.log(e, navigator.xr)
})

function App() {

  return (
    <>
      <NavMenu />
      <Route path="/AR" component={ARScene} />
    </>
    
  )
}

export default App