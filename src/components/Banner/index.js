import { StyledBanner, StyledImg, StyledText, StyledTextItems } from "./style"
export default function Banner() {
    return (
        <StyledBanner>
            <StyledImg src="/images/plant.png" alt="foto planta"></StyledImg>

            <StyledText>
                <h3>Como conseguir </h3>
                <h4>minha planta</h4>
                <StyledTextItems><img src="/images/Ellipse1.png" alt="icone"></img><span>Escolha suas plantas</span></StyledTextItems>
                <StyledTextItems><img src="/images/Ellipse1.png" alt="icone"></img><span>Faça seu pedido</span></StyledTextItems>
                <StyledTextItems><img src="/images/Ellipse1.png" alt="icone"></img><span>Aguarde na sua casa</span></StyledTextItems>
            </StyledText>
        </StyledBanner>
    )
}