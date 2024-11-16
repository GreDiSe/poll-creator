import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;

     @media (max-width: 1024px) {
       font-size: 14px;
     }

     @media (max-width: 768px) {
       font-size: 12px;
     }
  }

  body {
    font-family: "Montserrat", sans-serif;
  }
`;
