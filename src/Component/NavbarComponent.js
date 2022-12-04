import React from 'react'
import { Navbar,Container ,Nav} from 'react-bootstrap'
import {BsFillCartCheckFill} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'


const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
       <BsFillCartCheckFill style={{color:'green'}}/>{' '}
        React Bootstrap
      </Navbar.Brand>
      <Nav>
         <Nav.Link as={NavLink} to='/home'>Home</Nav.Link>
            <Nav.Link as={NavLink} to='/cart'>Cart</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavbarComponent