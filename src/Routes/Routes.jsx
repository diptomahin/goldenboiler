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
import ProductDetails from "../Pages/Product/ProductDetails";
import ErrorPage from "../Components/ErrorPage";
import Certification from './../Pages/AboutUs/Certification';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
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
        path: "/products/:id",
        element: <ProductDetails></ProductDetails>,
        loader :()=> fetch('/products.json')
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
      },
      {
        path: "/certification",
        element: <Certification></Certification>,
      }
    ]
  },
]);


export default router;