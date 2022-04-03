
import styled from "styled-components";

import { BsTwitter  } from 'react-icons/bs';
import {SiFacebook} from 'react-icons/si'; 
import logo from '../Header/logo.png';
import { Col, Container, Row } from "react-bootstrap";


export default function Footer() {
  return (
    <Wrapper>
      <Container  > 
      <Row>
          <Col> < BsTwitter className="twitter"/>  </Col>
          <Col> <img className='logo' src={logo} alt='Charle Cantin' /> </Col>
          <Col> <SiFacebook className="faceBook"/>  </Col>
        </Row>
        </Container>
    </Wrapper>
  )
}
const Wrapper = styled.div`
display: flex; 
  

img { height: 100% ; width: 100% ; }

.twitter { 
  font-size: 25px ; 
  color: white ;
  cursor : pointer;
     }
  

.faceBook { font-size: 25px ;
   color: white ; 
  cursor : pointer; }

@media screen and (min-width: 1280px) { 

img { height: 70% ; width: 70% ; } 
    }

.col { justify-content: center ;
  align-items: center; 
display: flex;  }


`
