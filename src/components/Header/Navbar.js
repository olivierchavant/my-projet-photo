import React from 'react'
import styled from 'styled-components'

export default function Navbar() {
  return (
    <Wrapper>
      <li className='items'> Accueil</li>
      <li className='items'> Galerie</li>
      <li className='items'> Tarifs</li>
      <li className='items'> Contact</li>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
color: red; 
display: flex; 
align-item: center; 
background: #bbbbbb; 
height: 50px; 

`