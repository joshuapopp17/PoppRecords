import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/navbarstyle.css'
import logo from '../assets/logo.png'
import { Badge } from 'react-bootstrap';
import useCart from '../hooks/useCart';
import { Link } from 'react-router-dom';

const NavContainer = () => {
    const {total, getTotal} = useCart()

    useEffect(() => {
        getTotal()
    }, [])

  return (
    <Navbar className='navbar-container' expand="lg" fixed="top">
      <Container className="justify-content-between">
        <Nav>
            <Nav.Link as={Link} to='/'>HOME</Nav.Link>
        </Nav>
        <Navbar.Brand as={Link} to='/'>
            <img
              alt=""
              src={logo}
              height="60"
              className="d-inline-block align-top"
            />
        </Navbar.Brand>
        <Nav>
            <Nav.Link as={Link} to='/checkout'>CART</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavContainer