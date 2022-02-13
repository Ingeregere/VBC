import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import './styleNavbar.css'

function Navbars() {
  return (
    <Navbar collapseOnSelect expand="lg"  bg={'warning'} className={'bgNavbar'}>
  <Container>
  <Navbar.Brand href="#home">VBC-INTERNATIONAL</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" className={'borderNavbar'} />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Accueil</Nav.Link>
      <Nav.Link href="#pricing">A propos</Nav.Link>
      <Nav.Link href="#pricing">Graduation</Nav.Link>

      
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Youtube</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        facebook
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Navbars