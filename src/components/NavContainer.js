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
    const {total, getTotal, cart} = useCart()

    useEffect(() => {
        getTotal()
    }, [])

  return (
    <Navbar className='navbar-container d-flex' expand="lg" fixed="top">
      <Container className="justify-content-between">
        <Navbar.Brand as={Link} to='/' className='flex-1'>
            <img
              alt=""
              src={logo}
              height="60"
              className="d-inline-block align-top"
            />
        </Navbar.Brand>
        <Nav className='flex-1'>
            <Nav.Link as={Link} to='/checkout'><h5>CART {cart.length}</h5></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavContainer