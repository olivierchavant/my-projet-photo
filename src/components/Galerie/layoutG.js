import styled from "styled-components"; 
import Galerie from ".";
import { Col, Row } from "react-bootstrap";



export default function LayoutG () { 
  
    return ( 
        
        <Wrapper> 
            <Row> 
           <Galerie  as={Col} md="6" />
           <Galerie  as={Col} md="6"  />
           </Row>
           
        </Wrapper>
    )
}

const Wrapper = styled.div `
display: flex; 
width: 100%; 
justify-content: center; 


    ` ; 
