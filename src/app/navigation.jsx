import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from '../components//Navbar'

import SceneScreen from '../pages/scene'

export default function Navigation() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path='/AR' component={SceneScreen} />
    </BrowserRouter>
  )
}
