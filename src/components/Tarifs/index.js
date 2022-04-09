
import styled from "styled-components";
import { Table , Container, Spinner} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import useFetch from "../hooks/useFetch"; 
import { API_URL } from "../../Config";



export default function Tarifs() {

  const {isLoading, posts} = useFetch(`${API_URL}/api/tarifs`) 

  return (
    <Wrapper>
      <h2>Tarifs </h2>
      <Container fluide="true" > 
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Titre</th>
          <th>Description</th>
          <th>Montant</th>
        </tr>
      </thead>
              {isLoading ? <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
            </Spinner>:   posts.data.map( tarif =>(   
             
      <tbody key={tarif.id}>
        <tr >
          <td>{tarif.attributes.title}</td>
          <td>{tarif.attributes.description}</td>
          <td>{tarif.attributes.tarif}</td>
        </tr>
      </tbody> 
        
      ))}
    </Table>
    </Container>
</Wrapper>
)
}

const Wrapper = styled.div`

padding-top: 25px; 
h2 {  
  text-align: center;
margin-bottom: 50px;  }

th , tr {
  color:  white;
  text-align: center }
 
.icon { text-align: center }

table { 
  & a { font-size: 24px;
    font-weight: bold ; 
    text-decoration: none;
    color: white;
    }
  background: #44575f ;  }

@media screen and (min-width: 1280px) { 
.container { 
  padding-top: 100px ; 
}}
` 
