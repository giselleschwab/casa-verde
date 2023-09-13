import { Content, Container, StyledTitle, SpanTitle, StyledDescription, StyledInput, StyledInputContainer, StyledImage, StyledButton, StyledImagePlant } from "./style"


export default function Newsletter() {
    return (
        <>
            <Content>
                <Container>
                    <StyledTitle>Sua casa com as </StyledTitle>
                    <SpanTitle>melhores plantas</SpanTitle>
                    <StyledDescription>Encontre aqui uma vasta seleção de plantas para decorar a sua casa
                        e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine
                        nossa newsletter para saber das novidades da marca
                    </StyledDescription>
                    <StyledInputContainer>
                        <StyledImage src="/images/mail.png" alt="icone email" />
                        <StyledInput type="text" placeholder="Insira seu e-mail" />
                        <StyledButton type="submit">Assinar newsletter</StyledButton>
                    </StyledInputContainer>
                </Container>
                <StyledImagePlant src="images/imagem-hero.png"></StyledImagePlant>
            </Content>
        </>
    )
}