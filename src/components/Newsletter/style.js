import { styled } from "styled-components";

const customFont = "'Montserrat', sans-serif";
const customFontPlants = "'Elsie Swash Caps'";

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`

const Container = styled.form`
    display: flex;
    flex-direction: column;

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
    line-height: 26px;
    color: #202020;
    opacity: 0.5;
    font-family: ${customFont}
`
const StyledInputContainer = styled.div`
    position: relative;
 `
const StyledImage = styled.img`
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 21px;
`

const StyledInput = styled.input`
    width: 300px;
    height: 75px;
    background: #FFF;
    border: transparent;
    box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.06);
    padding-left: 40px;

    &::placeholder {
        color: #202020;
        opacity: 0.3;
        font-family: ${customFont};
        font-size: 16px;
    }
`
const StyledButton = styled.button`
    width: 190px;
    height: 75px;
    background-color: #FFCB47;
    color: #FFF;
    border: transparent;
    font-family: ${customFont};
    font-size: 16px;
`
const StyledImagePlant = styled.img`
    width: 600px;
    
`
export {
    Content,
    Container, 
    StyledTitle,
    SpanTitle, 
    StyledDescription,
    StyledInputContainer,
    StyledImage,
    StyledInput,
    StyledButton,
    StyledImagePlant
};