import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav } from 'react-bootstrap'

const NavMenu = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='/home'>PC Building Simulator</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='/home'>Home page</Nav.Link>
          <Nav.Link href='/description'>PC Examples</Nav.Link>
          <Nav.Link href='/ar'>AR Mode</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default NavMenu
