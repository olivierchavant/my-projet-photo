import { Container, Row } from "react-bootstrap";
import styled from "styled-components";

export default function Home() {
  return (
    <Wrapper>
      <Container fluide= "true" > 
      <Row > 
        <h1>Charles Cantin - Photographe</h1>
      </Row>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`

display: flex;  
justify-content: center;
align-items: center; 
padding-bottom: 50px; 
h1 {  padding: 20px;
  border-radius: 20px;
  text-align: center;
  background: #44575f ;
  opacity: 1;
 }
 
 @media screen and (min-width: 1280px) { height:75vh}
` 




 