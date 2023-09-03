import { styled } from "styled-components";
import { MdOutlineMailLock } from 'react-icons';

const customFont = "'Montserrat', sans-serif";
const customFontPlants = "'Elsie Swash Caps'";

const Container = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    margin-left: 140px;
    margin-top: 80px;
`
const StyledTitle = styled.h2`
    font-family: ${customFont};
    font-size: 22px;
    font-weight: 400;
    color: #202020;
    opacity: 0.5;
`

const SpanTitle = styled.span`
    opacity: 1;
    font-size: 55px;
    font-family: ${customFontPlants};
    width: 358px;
    margin-bottom: 20px;
`

const StyledDescription = styled.p`
    width: 481px;
    color: #202020;
    opacity: 0.5;
    font-family: ${customFont}
`


const StyledInput = styled.input`
    width: 250px;
    height: 50px;
    background: #FFF;
    border-color: #FFF;
    box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.06);
`

export { 
    Container, 
    StyledTitle,
    SpanTitle, 
    StyledDescription,
    StyledInput,
};