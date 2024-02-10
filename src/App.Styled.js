import { createGlobalStyle } from "styled-components";
import wolf from "./font-family/Keshiki/Keshiki-RpYoA.otf";
import WyDon from "./font-family/Keshiki/Sdasian-WyDon.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'wolf';
    src: url(${wolf}) format('opentype'); 
  }
  @font-face {
    font-family: 'WyDon';
    src: url(${WyDon}) format('opentype'); 
  }

  body {
    font-family: 'wolf', sans-serif; 
  }
`;

export default GlobalStyle;
