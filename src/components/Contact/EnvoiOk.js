import React from 'react'
import styled from "styled-components";
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';



export default function EnvoiOk () {
    console.log("super")
  return (
      <Wrapper> 
            <h2>Votre Formulaire à bien été envoyé </h2>
            <Link className ="justify-content-md-center" to={`/`}>
               <Button >Accueil </Button>
            </Link> 
    </Wrapper>
  )
}; 


const Wrapper = styled.div`

display: flex;  
justify-content: center;
align-items: center; 
padding-bottom: 50px; 

h2 {  
  text-align: center;
    padding : 50 px; 
   
 }
 display: flex; 
 margin-top: 80px; 
 align-items: center; 
 flex-direction: column;
 button { margin-top: 20px; 
   background: #03506f; 
   width: 200px; }
 ` 