import Banner from "components/Banner";
import Doubt from "components/Doubt";
import Features from "components/Features";
import Header from "components/Header";
import IsFree from "components/IsFree";

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Banner />
                <Features />
                <IsFree />
                <Doubt />
            </main>
        </>
    );
}

export default Home;
