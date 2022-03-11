import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import logo from'./logo.png'; 

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false); 
    const [largeur, setLargeur] = useState(); 
    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu); 
    }

    useEffect(()=> {
        const changeWidth = ()=> {
            setLargeur(window.innerWidth); 
            if(window.innerWidth>640) {
                 setToggleMenu(false)
                }
        }

        window.addEventListener('resize', changeWidth); 
        return ()=> { 
            window.removeEventListener('resize', changeWidth); 
        }
     }, [])
  return (
    <Wrapper>
       <img className='logo' src={logo} alt="logo" />
        
        { (toggleMenu || largeur > 640)  && (
        <ul className='liste'>
            <Link to="/" className='items'>Accueil  </Link> 
            <Link to="/Galerie" className='items'>Galerie  </Link>
            <Link to="/Tarifs" className='items'>Tarifs  </Link>  
            <Link to="/Contact" className='items'>Contact  </Link>  
        </ul>
           )} 

        <button onClick={toggleNavSmallScreen} className='button'> BTN </button>
    </Wrapper> 
  )
}

const Wrapper = styled.nav`

background: #bbbbbb;  
height: 100px; 

.liste { 
    display: flex;
    list-style-type: none; 
    height: 100%; 
    display: flex; 
    justify-content: center;
    align-items: center;
    position: relative; 
    margin-left: 0; 
    padding: 0; 
    
    }
.items { 
    background: #bbbbbb; 
    text-decoration: none;
    display: flex;
    margin-right: 50px;
    color:ghostwhite; 
    font-weight: bold;
    cursor: pointer;
    justify-content: center;
 }
 .logo { 
    display: block; 
    position:absolute;
    margin-top: 20px; 
    margin-left: 20px; 
 }
     

 button { display: none; }

 @media ( max-width : 640px  ) { 
    .liste { 
        flex-direction: column;
        height: 400px;
    }
    & li:nth-child(1){ 
        border-top: solid #fff 1px;
        
    }
    .items { 
        height: 50px; 
        width: 100%;
        border-bottom: solid #fff 1px;
        line-height: 50px; }

    button { 
        display: block; 
        position:absolute; 
        right: 10px; 
        top: 10px;
        color: #333;
    }
`
