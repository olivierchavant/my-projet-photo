import styled from "styled-components";
import { useState, } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col,Form,Row,Button,InputGroup, Container,  } from "react-bootstrap";
import commentAPI from "../hooks/commentAPI";


const FormComment = ({id}) => {

  const [validated, setValidated] = useState(false);
  

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
        commentAPI(req,form)
        } catch (error) { console.log (error)} 
    } ; 
  }; 

  const [content, setContent] = useState({})

    const handleChange = (event) => {
    const { name  , value} = event.currentTarget; 
    setContent({
        galerie: {id} ,
      ...content, 
      [name]: value, 
    }) 
   
  }; 
 const req = { 
     data:  content
 }



  return (
    <Wrapper>
      <h2>  </h2>

      <Container  fluide > 
          <Form noValidate validated={validated} onSubmit={handleSubmit} 
             >
            <Row className="mb-3">  
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Prénom</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Votre prénom"
                  name="prenom"
                  onChange={handleChange}
                
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
            <Row className="center"> <Button type="submit">Envoyer </Button> </Row>
            
          
          </Form>
    </Container>
    </Wrapper>
  );
}

export default FormComment 


const Wrapper = styled.div`
padding-bottom: 50px; 
padding-top: 25px; 
h2 {  
  text-align: center;
margin-bottom: 50px;  }
.container { 
  padding-top: 100px ; 
}
button { margin-top: 20px; 
  background: #03506f; 
  width: 200px; }

.center { padding-top: 30px;  justify-content: center; 
}

 ` 