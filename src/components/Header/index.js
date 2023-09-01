import Link from "next/link"
import Logo from "../Logo"
import { StyledHeader, Navigate } from "./styled"

export default function Header() {
    return (

        <>
            <StyledHeader>
                <Logo src="./images/logo.png" alt="logo casa verde" />
             
                    <nav>
                        <ul>
                        <Navigate>
                            <Link href="/comofazer">Como fazer</Link>
                            <Link href="/ofertas">Ofertas</Link>
                            <Link href="/depoimentos">Depoimentos</Link>
                            <Link href="/videos">Vídeos</Link>
                            <Link href="carrinho">Meu carrinho</Link>
                            </Navigate>
                        </ul>
                    </nav>
               
            </StyledHeader>
        </>
    )
}