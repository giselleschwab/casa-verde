import GlobalStyle from "../src/components/GlobalStyle";

function MyApp ({ Component, pageProps }) {
    return(
        <>
        {/* aqui posso colocar o Head importado do next com as fontes padrão*/}
        <GlobalStyle/>
        <Component {...pageProps} />
        </>
    )
}

export default MyApp;