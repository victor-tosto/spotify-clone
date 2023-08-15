import Banner from "components/Banner";
import Doubt from "components/Doubt";
import Features from "components/Features";
import Footer from "components/Footer";
import Header from "components/Header";
import IsFree from "components/IsFree";
import Play from "components/Play";

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Banner />
                <Features />
                <IsFree />
                <Doubt />
                <Play />
            </main>
            <Footer />
        </>
    );
}

export default Home;
