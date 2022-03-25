
import UseFetch from "../hooks/useFetch"; 
import styled from 'styled-components';
import { Link } from "react-router-dom";



export default function listeCategorie() {

   
    const {isLoading, posts} = UseFetch("http://localhost:1337/api/galeries") 

    
  return (

    <Wrapper>   {isLoading ? "jecharge...." :   posts.data.map( categorie => ( 
            <ul key={categorie.id}> 
                <Link to={`/galerie/post/${categorie.id}`}  >  <li > {categorie.id} {categorie.attributes.title}  </li>    </Link>
            </ul>)) } 

    </Wrapper>
    
    
  )
}


const Wrapper = styled.div` 

& a {
color: white; 
text-decoration: none;
display: flex; 
flex-direction: column; }
`
