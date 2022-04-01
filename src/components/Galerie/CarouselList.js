
import useFetch from "../hooks/useFetch";
import { Carousel, Container, Button, Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API_URL } from "../../Config";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";



export default function CarouselList() {

    const {id} = useParams()

    useEffect(() => { console.log(id)} )

    const {isLoading, posts    } = useFetch(`${API_URL}/api/galeries/${id}?populate=*` ) 

  return (
       <Wrapper> 
          <Container fluide > 
            <Carousel  fade > 
            {isLoading ? 
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
             : posts.data.attributes.image.data.map( post => 
                <Carousel.Item key={post.id}>
                  <img 
                    className="d-block w-100"
                    src= { API_URL + post.attributes.formats.medium.url}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <p> {posts.data.attributes.title} </p>
                  </Carousel.Caption>
                </Carousel.Item> )}
            </Carousel>
          </Container>
          <Link className ="justify-content-md-center" to={`/galerie/`}>
               <Button >Retour Galerie</Button>
            </Link> 
        </Wrapper>

  )
}

const Wrapper = styled.div`

display: flex; 
margin-top: 90px; 
align-items: center; 
flex-direction: column;
height: 70vh ;
button { margin-top: 20px; 
  background: #03506f; 
  width: 200px; }

.carousel { 
  -webkit-box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
}
h2 {  
  text-align: center;
margin-bottom: 40px;  }


.carousel {
  position: relative;
}

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-item {
  position: relative;
  display: none;
  align-items: center;
  width: 100%;
  @include transition($carousel-transition);
  backface-visibility: hidden;
  perspective: 1000px;
}

.carousel-item.active,
.carousel-item-next,
.carousel-item-prev {
  display: block;
}

.carousel-item-next,
.carousel-item-prev {
  position: absolute;
  top: 0;
}

`

//  posts.map( post => <h2 key={post.data.id}>{post.data.attributes.name} {post.data.attributes.caption})   

    


