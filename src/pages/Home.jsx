

import HeroContent from "../components/HeroContent";
import Analytics from "../components/Analytics";
import NewsLetter from '../components/NewsLetter';
import Cards from '../components/Cards'
import Footer from '../components/Footer'


const Home = () =>{

    return(
        <>
            <HeroContent />
            <Analytics />
            <NewsLetter />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;