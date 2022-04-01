import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};
  
  @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;300;400;500;700&display=swap');

  * {
    box-sizing: border-box;
  }

  iframe {
    pointer-events: none;
  }

  body {
    font-family: "Lexend Deca", sans-serif;
    font-size: 16px;
  }

  a {
    color: #52b6ff;
  }
`;

export { GlobalStyles };
