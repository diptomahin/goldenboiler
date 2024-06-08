import ClientMarquee from "../Components/HomeComp/ClientMarquee";
import HomeContact from "../Components/HomeComp/HomeContact";
import HomeMassage from "../Components/HomeComp/HomeMassage";
import HomeProducts from "../Components/HomeComp/HomeProducts";
import HomeServices from "../Components/HomeComp/HomeServices";
import Slider from "../Components/HomeComp/Slider";

const Home = () => {

    return (
        <div>
            <Slider></Slider>
            <ClientMarquee></ClientMarquee>
            <HomeMassage></HomeMassage>
            <HomeProducts></HomeProducts>
            <HomeContact></HomeContact>
            <HomeServices></HomeServices>
        </div>
    );
};

export default Home;