
import styled from "styled-components";
import { Table  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { listeTarifs } from "../Tarifs/listeTarifs";



export default function Tarifs() {
  return (
    <Wrapper>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Titre</th>
          <th>Description</th>
          <th>Montant</th>
        </tr>
      </thead>
    {listeTarifs.map( tarif =>(        
      <tbody>
        <tr key={tarif.id}>
          
          <td>{tarif.title}</td>
          <td>{tarif.Description}</td>
          <td>{tarif.Montant}</td>
        </tr>
      </tbody> ))}
    </Table>
</Wrapper>
)
}

const Wrapper = styled.div`
height: 50%;
width: 70%;
display: flex;  
justify-content: center; 
align-items: center;  
padding: 60px; 
` ; 
