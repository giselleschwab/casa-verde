import Head from "next/head";
import GlobalStyle from "../src/components/GlobalStyle";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Oswald:wght@500&family=Tilt+Prism&display=swap" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Elsie+Swash+Caps:wght@900&family=Montserrat&family=Oswald:wght@500&family=Tilt+Prism&display=swap" rel="stylesheet"></link>
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp;