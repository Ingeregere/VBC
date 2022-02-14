import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './styleNavbar.css'

function Navbars() {
  return (
    <Navbar collapseOnSelect expand="lg"  bg={'warning'} className={'bgNavbar'}>
  <Container>
  <Navbar.Brand as={Link} to={"/"}>VBC-INTERNATIONAL</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" className={'borderNavbar'} />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to={"/"}>Accueil</Nav.Link>
      <Nav.Link as={Link} to={"/"}>A propos</Nav.Link>
      <Nav.Link as={Link} to={"/graduation"}>Graduation</Nav.Link>

      
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/">Youtube</Nav.Link>
      <Nav.Link eventKey={2} as={Link} to="/">
        facebook
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Navbars