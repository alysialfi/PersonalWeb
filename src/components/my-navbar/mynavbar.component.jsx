import React, {useEffect, useState} from 'react'
import { Navbar, Nav, FormControl, NavDropdown, Form, Button, Image } from 'react-bootstrap';
import logo from '../../assets/me_logo.png'
import './mynavbar.style.css'

const MyNavbar = () => {

  const [scroll, setScroll] = useState('')
  let listener = null

  useEffect(() => {
    document.addEventListener("scroll", e => {
      const bgColor = window.scrollY > 100 ? 'rgb(33, 28, 79)' : 'transparent'
      setScroll(bgColor)
    })
  }, [setScroll])
  return (
    <Navbar
      fixed="top"
      variant="dark"
      expand="md"
      className="animate-navbar nav-theme justify-content-between"
      style={{backgroundColor:scroll}}
    >
      <Navbar.Brand href="" className="d-flex justify-content-center">
        <Image src={logo} style={{width: "15%"}}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="float-right">
        <Nav className="ml-auto pr-5">
          <Nav.Link href="#portofolio">Portofolio</Nav.Link>
          <Nav.Link href="#experience">Experience</Nav.Link>
          <Nav.Link href="#achievement">Achievement</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNavbar
