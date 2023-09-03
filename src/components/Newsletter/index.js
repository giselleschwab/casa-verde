import { Container, StyledTitle, SpanTitle, StyledDescription, InputContainer, StyledInput, EmailIcon } from "./style"


export default function Newsletter() {
    return (
        <>
            <Container>
                <StyledTitle>Sua casa com as </StyledTitle>
                <SpanTitle>melhores plantas</SpanTitle>
                <StyledDescription>Encontre aqui uma vasta seleção de plantas para decorar a sua casa
                    e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine
                    nossa newsletter para saber das novidades da marca
                </StyledDescription>
            </Container>

            <img src='/images/mail.png'></img>
            <StyledInput type="text" placeholder="Insira seu e-mail" />
            <button type="submit">Assinar newsletter</button>

        </>
    )
}