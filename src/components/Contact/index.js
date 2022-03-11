
import styled from "styled-components";
import { useState, } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col,Form,Row,Button,InputGroup,  } from "react-bootstrap";


export default function Contact() {
   
    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Wrapper>
    <Form noValidate validated={validated} onSubmit={handleSubmit} data-netlify="true" 
    method="post">
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Prénom</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Votre prénom"
          
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder=" Votre Nom"
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Adresse Mail</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="email"
              placeholder="name@example.com" 
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Adresse Non Valide 
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row>
      <Form.Group as={Col} md="12" controlId="floatingTextarea2">
          <Form.Label>Commentaire </Form.Label>
          <InputGroup hasValidation>
            <Form.Control
               as="textarea"
               placeholder="Laisser votre message ici "
               style={{ height: '100px' }}
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Pas de messages saisie  ? 
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>

      <Button type="submit">Submit form</Button>
    </Form>
    </Wrapper>
  );
}




const Wrapper = styled.div`
height: 100%; 
width: 100%; 
display: flex;  
justify-content: center; 
 ` ; 
