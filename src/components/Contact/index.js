
import styled from "styled-components";
import { useState, } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col,Form,Row,Button,InputGroup, Container,Spinner  } from "react-bootstrap";
import axios from "axios";
import { API_POST } from "../../Config";
import { Redirect } from "react-router-dom";
import { API_URL } from "../../Config";
import useFetch from "../hooks/useFetch"; 



export default function Contact() {
  const {isLoading, posts} = useFetch(`${API_URL}/api/tarifs`) 


  const [validated, setValidated] = useState(false);
  const [verifSubmit, setVerifSubmit] = useState(false); 

  const handleSubmit = async (event) => {
   
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }; 
    setValidated(true);

    if (form.checkValidity() === true) { 
      event.preventDefault();
      try { 
            await axios.post(API_POST, content)
            .then(function (res) { 
              console.log(res.status)
              if (res.status === 200) { 
                console.log ("yes 200"); 
                form.reset() ;
              setVerifSubmit(true) }
             
            }); 
            } catch (error) { console.log (error) } 
    } ; 
  }; 


  const [content, setContent] = useState({})

    const handleChange = (event) => {
    const { name  , value} = event.currentTarget; 
    setContent({
      ...content, 
      [name]: value, 
    }) 
    console.log(content)
   
  }; 
  if (verifSubmit) { 
    return <Redirect to="/ok"/>
    }


  return (
    <Wrapper>
      <h2>Contactez Moi...... </h2>
      <Container  fluide="true" > 
          <Form noValidate validated={validated} onSubmit={handleSubmit} 
             >
            <Row className="mb-3">  
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Prénom</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Votre prénom"
                  name="Prénom"
                  onChange={handleChange}
                
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder=" Votre Nom"
                  name="Nom"
                  onChange={handleChange}
                  
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>Adresse Mail</Form.Label>
                <InputGroup hasValidation >
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="nom@example.com" 
                    aria-describedby="inputGroupPrepend"
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Adresse Non Valide 
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row>
            <Form.Group className="mb-3" controlId="validationChoix" >
            <Form.Label>quelle formule vous intéresse </Form.Label> 
              <Form.Select aria-label="Default select example" 
              name="formule" 
              onChange={handleChange}> 
                    <option>choisissez votre formule </option>
                  {isLoading ? <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                  </Spinner>:   posts.data.map( tarif =>(
                   
                    <> 
                    
                    <option key={tarif.id}>{tarif.attributes.title}</option> 
                    </>
                    ))}
              </Form.Select> 
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
                    name="commentaires"
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Pas de messages saisie  ? 
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="center"> <Button type="submit" variant="secondary" >Envoyer </Button> </Row>
            
          
          </Form>
    </Container>
    </Wrapper>
  );
}




const Wrapper = styled.div`
padding-bottom: 50px; 
padding-top: 25px; 
h2 {  
  text-align: center;
margin-bottom: 50px;  }

@media screen and (min-width: 1280px) { 
.container { 
  padding-top: 100px ; 
}} 
button { margin-top: 20px; 
  background:  #44575f ; 
   
  width: 200px; }

.center { padding-top: 30px;  justify-content: center; 
}
.form-label { color: #44575f  }

 ` 