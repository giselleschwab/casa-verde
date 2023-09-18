import styled from "styled-components";

const customFont = "'Montserrat', sans-serif";
const customFontPlants = "'Elsie Swash Caps'";

const StyledBanner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    filter: drop-shadow(10px 10px 30px rgba(0, 0, 0, 0.06));
`
const StyledImg = styled.img`
    width: 400px;
`
const StyledText = styled.div`
    font-family: ${customFont};
    margin-left: 20px;

    h3 {
        font-size: 18px;
        color: #202020;
        opacity: 0.5;
        font-weight: 400;
        margin-top: 10px;
        margin-bottom: 5px;
    }

    h4 {
        font-size: 38px;
        font-family: ${customFontPlants};
        margin-bottom: 15px;
    }
`

const StyledTextItems = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    img {
        width: 40px;
    }


    span {
        font-size: 18px;
        color: #202020;
        opacity: 0.5;
        margin: 15px;
    }
`

export {
    StyledBanner,
    StyledImg,
    StyledText,
    StyledTextItems
}