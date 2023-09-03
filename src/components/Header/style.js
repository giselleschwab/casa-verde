import { styled } from "styled-components";

const customFont = "'Montserrat', sans-serif";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 10px;
`;

const Navigate = styled.nav`
   display: flex;
   gap: 25px;
   list-style-type: none;
   padding-top: 10px;
  

   a {
    color: black;
    text-decoration: none;
    font-family: ${customFont};
    font-weight: bold;
   }
   
   a:not(:last-child)::after {
    content: '/';
    margin-left: 25px;
   }

`

export { StyledHeader, Navigate }