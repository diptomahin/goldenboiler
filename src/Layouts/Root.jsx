import { Outlet } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar";
import Footer from "../Components/Shared/Footer";
import ScrollToTop from "../Components/ScrollToTop";

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <ScrollToTop />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;