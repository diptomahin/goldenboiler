import ClientMarquee from "../Components/HomeComp/ClientMarquee";
import HomeMassage from "../Components/HomeComp/HomeMassage";
import HomeProducts from "../Components/HomeComp/HomeProducts";
import Slider from "../Components/HomeComp/Slider";

const Home = () => {

    return (
        <div>
            <Slider></Slider>
            <ClientMarquee></ClientMarquee>
            <HomeMassage></HomeMassage>
            <HomeProducts></HomeProducts>
        </div>
    );
};

export default Home;