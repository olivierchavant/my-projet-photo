import styled from "styled-components"; 
import Header from "../components/Header";
import Footer from "../components/Footer";
import GlobalStyle from "./GlobalStyle";
import backgroundImmage from "../components/Home/background.jpg"; 

export default function Layout ({children}) { 
  
    return ( 
        
        <Wrapper> 
            
            <GlobalStyle/>
             <Header /> 
          
                <Main> 
                    {children}
                </Main>
              
     
            <Footer />
           
            
        </Wrapper>
    )
}

const Wrapper = styled.div `
display: flex;
flex-direction: column;
min-height: 100vh;
background-color: black;
@media screen and (min-width: 1280px)
{
background-Image: url(${backgroundImmage}); 
background-position: 'center'  ; 
background-size: 100%; 
background-repeat: 'no-reapeat' ; 
}

    ` 

const Main = styled.div`



min-height: calc(100vh - 210px); 

width : 100% ; 
max-width : auto;   
margin: auto;  
display: flex ; 
justify-content: center;
 

`