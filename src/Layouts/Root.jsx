import { Outlet } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar";
import Footer from "../Components/Shared/Footer";

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;