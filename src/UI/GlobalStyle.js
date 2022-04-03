import { createGlobalStyle } from "styled-components";
 


const GlobalStyle = createGlobalStyle` 

background: black; 

@import url('https://fonts.googleapis.com/css2?family=Fredoka&family=Inconsolata&family=Open+Sans:wght@300&family=Pacifico&display=swap');

body { height: 100% ;
    font-family: 'Pacifico', cursive;
    font-size: large;
    font-weight: bold;
}

h1, h2, h3 { 
    color: aliceblue;; 
}

button { background: #44575f }
`

export default GlobalStyle; 