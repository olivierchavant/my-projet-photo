import React from 'react'
import { Card, Button, Container, Row, Spinner } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { API_URL } from '../../Config';
import UseFetch from "../hooks/useFetch"; 
import { Link } from 'react-router-dom';

export const cardPost = () => {

  const {isLoading, posts} = UseFetch("http://localhost:1337/api/galeries?populate=*") 

  return (
    <Wrapper> 
        <Container fluide='true'> 
        <h2> Ma galerie....  </h2>
        <Row className="justify-content-md-center">
         {isLoading ?  <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
            </Spinner>
             :   posts.data.map( card => 
          <Card   key={card.id}>
            <Card.Img variant="top" src={ API_URL + card.attributes.photo.data[0].attributes.formats.thumbnail.url} />
            <Card.Body > 
              <Card.Title>{card.attributes.title} </Card.Title>
              <Link to={`/galerie/post/${card.id}`}> <Button >En voir Plus.....</Button>   </Link>   
            </Card.Body>
          </Card>) } 
        </Row>
        </Container>
    </Wrapper>
    
  )
}

const Wrapper = styled.div`

.card { margin: 20px;
padding-top: 10px;
color:#03506f ;
width: 18rem; 
display: flex; 

justify-content: center; 
-webkit-box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
}
.card-body { margin: auto; 
 }
 .card-title { text-align: center;   }

& button { 
  background: #03506f; 
 }


 padding-top: 25px; 
justify-content: center; 
h2 {  
  text-align: center;
margin-bottom: 20px;  }


`