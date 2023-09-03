import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
  }
  img, video {
    max-width: 100%;
    height: auto;
  }
`

export default GlobalStyle;