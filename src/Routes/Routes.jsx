import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Layouts/Root";
import AllProducts from './../Pages/Product/AllProducts';
import OurServices from './../Pages/Services/OurServices';
import ContactUs from './../Pages/ContactUs/ContactUs';
import AboutGoldenBoiler from './../Pages/AboutUs/AboutGoldenBoiler';
import Massage from './../Pages/AboutUs/Massage';
import Gallery from './../Pages/AboutUs/Gallery';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/services",
        element: <OurServices></OurServices>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/aboutUs",
        element: <AboutGoldenBoiler></AboutGoldenBoiler>,
      },
      {
        path: "/massage",
        element: <Massage></Massage>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      }
    ]
  },
]);


export default router;