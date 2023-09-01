import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  img, video {
    max-width: 100%;
    height: auto;
  }
`

export default GlobalStyle;