import React from 'react'
import { Navbar, Nav, FormControl, NavDropdown, Form, Button, Image } from 'react-bootstrap';
import Aku from '../../assets/birth.png'
import './mynavbar.style.css'

const MyNavbar = () => {
  return (
    <Navbar
        fixed="top"
        variant="dark"
        expand="md"
        className="animate-navbar nav-theme justify-content-between"
      >
    <Navbar.Brand href="#home">
      <Image className="logo" src={Aku}/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="#deets">More deets</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Dank memes
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default MyNavbar
