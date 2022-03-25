import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const NavBar2 = () => {
  return (
    <Wrapper> 
        
        <Navbar expand="lg">
        <h3> Charles Cantin </h3>  
        <Container >
        
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="m-auto ">
                <Nav.Link className='items' as={Link} to = {'/'}>Home</Nav.Link>
                <Nav.Link className='items ' as={Link} to = {'/galerie'}>Galerie</Nav.Link>
                <Nav.Link className='items ' as={Link} to = {'/tarifs'}>Tarifs</Nav.Link>

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

& a { font-size: 24px;
    font-weight: bold ; 
    }
    -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);

h3 { text-align: center ;
    margin-left: 20px }

`