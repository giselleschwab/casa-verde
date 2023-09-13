import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border box;
  }
  img, video {
    max-width: 100%;
    height: auto;
  }

  body {
    background-image: url("images/Vector.png");
    background-repeat: no-repeat;
    background-position:  right top;
    background-size: 40%, 50%;
    margin: 0;
    padding: 0;
    height: 100vh;
  }

`

export default GlobalStyle;