import { useEffect } from "react";
import ClientMarquee from "../Components/HomeComp/ClientMarquee";
import HomeContact from "../Components/HomeComp/HomeContact";
import HomeMassage from "../Components/HomeComp/HomeMassage";
import HomeProducts from "../Components/HomeComp/HomeProducts";
import HomeServices from "../Components/HomeComp/HomeServices";
import Slider from "../Components/HomeComp/Slider";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
    useEffect(()=>{
        AOS.init();
      },[])
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