import PageTitle from "../src/components/patterns"
import Header from "../src/components/Header"
import Newsletter from "../src/components/Newsletter"
import Banner from "../src/components/Banner"

export default function HomePage() {
    return (
        <>
           <PageTitle>Casa verde</PageTitle>
            <Header />
            <Newsletter />
            <Banner />
        </>
    )
}