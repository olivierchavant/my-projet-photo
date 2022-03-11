
import styled from "styled-components";
import { Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "./pictures1.jpg"
import img2 from "./pictures2.jpg"
import img3 from "./pictures3.jpg"
import img4 from "./pictures4.jpg"



export default function Galerie() {
  return (
    <Wrapper>
       

       <Carousel  fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src= {img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <p>Nulla vitae elit libero</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src= {img2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <p>Lorem ipsum dolor sit amet,.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src= {img3}
            alt="Third slide"
          />
          <Carousel.Caption>
            
            <p>Praesent commodo cursus magna</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src= {img4}
            alt="Third slide"
          />
          <Carousel.Caption>
            <p>Praesent commodo cursus magna</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
     

    </Wrapper>
  )
}

 const Wrapper = styled.div`
 height: 500px; 
 width: 500px; 
 display: flex; 
 justify-content: center; 
 padding: 50px; 
  

 img { height: 400px; 
  width: 400px }
  
 

  ` ; 
 