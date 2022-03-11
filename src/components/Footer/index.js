
import styled from "styled-components";

import { FiTwitter } from 'react-icons/fi';
import {BsFacebook} from 'react-icons/bs'; 


export default function Footer() {
  return (
    <Wrapper>
        <div> <FiTwitter className="twitter"/>  </div>
        
        <BsFacebook className="faceBook"/> 

    </Wrapper>
  )
}
const Wrapper = styled.div`
display: flex; 
background: none;
height: 80px; 
justify-content: space-between; 
color:ghostwhite; 
padding: 10px; 
.twitter { font-size: 25px ; 
     }

.faceBook { font-size: 25px }
`
