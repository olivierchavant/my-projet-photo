import React from 'react'
import { Container, Nav, Navbar, NavbarBrand  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import logo from '../Header/logo.png';
import { Link } from 'react-router-dom';

<img className='logo' src={logo} alt='Charle Cantin' />
export const NavBar2 = () => {
  return (
    <Wrapper> 
    
        <Navbar className='menu' variant= 'dark' expand="lg">
        <Container >
            <NavbarBrand>
            <img className='logo' src={logo} alt='Charle Cantin' />
            </NavbarBrand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
                <Nav.Link className='items' as={Link} to = {'/'}>Home</Nav.Link>
                <Nav.Link className='items' as={Link} to = {'/tarifs'}>Tarifs</Nav.Link>
                <Nav.Link className='items' as={Link} to = {'/galerie'}>Galerie</Nav.Link>

            </Nav>
            <Nav>
                <Nav.Link className='items d-flex' as={Link} to = {'/contact'}>Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
       
    </Wrapper>
  )
}
const Wrapper = styled.div`

a { font-size: 22px;
    color:#03506f   }


 
`