import Services from "../../Services/Services";
import AboutSection from "./AboutSection";
import Bannar from "./Bannar";


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <AboutSection></AboutSection>
            <Services></Services>
        </div>
    );
};

export default Home;