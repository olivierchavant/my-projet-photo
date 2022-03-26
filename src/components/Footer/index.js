
import styled from "styled-components";

import { FiTwitter } from 'react-icons/fi';
import {SiFacebook} from 'react-icons/si'; 
import logo from '../Header/logo.png';
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <Wrapper>
      <Container  > 
      <Row>
          <Col> <FiTwitter className="twitter"/>  </Col>
          <Col> <img className='logo' src={logo} alt='Charle Cantin' /> </Col>
          <Col> <SiFacebook className="faceBook"/>  </Col>
        </Row>
        </Container>
    </Wrapper>
  )
}
const Wrapper = styled.div`
display: flex; 
height:  auto;   


.twitter { font-size: 25px ; 
     }

.faceBook { font-size: 25px }

img { height: 70% ; width: 70% ; }    

.col { justify-content: center ;
  align-items: center; 
display: flex;  }


`
