import React, { useContext, useState } from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import authentificate from '../services/Auth';
import authContext from '../../contexts/authContext';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export const LoginPage = () => {
    const history = useHistory()

    const [credential, setCredential] = useState(
        {
            "identifier": "" ,
            "password": ""
        }
    )
    const {setIsAuthenticated} = useContext(authContext) 

    const handleChange = ({currentTarget}) => {
        const { name  , value} = currentTarget; 
        setCredential({
          ...credential, 
          [name]: value, 
        }) 
        console.log(credential)
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try { 
            await authentificate(credential) 
            setIsAuthenticated(true)
            history.replace("contact")
        } catch(error) {console.log(error) }

        

    }
  return (
    <Wrapper>
    <Row> 
    <h2> Vous devez vous identifier pour accéder à cette page </h2>
    </Row>
    <Row>
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" >
            <Form.Label>Email address</Form.Label>
            <Form.Control 
            type="email" 
            placeholder="Enter email"
            id='identifier'
            name='identifier'
            onChange={handleChange}

            />
            <Form.Text 
            className="text-muted"
            >
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" >
            <Form.Label>Password</Form.Label>
            <Form.Control
             type="password" 
             placeholder="Password" 
             id='password'
            name='password'
            onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Row className='center'> 
        <Button   variant="primary" type="submit">
            Submit
        </Button>
        </Row>
    </Form>
    </Row>
    </Wrapper>
  )
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