import { useEffect, useState } from "react";
import HomeTitle from "../SectionTitle/HomeTitle";
import ProductCard from "../Products/ProductCard";
import { Link } from "react-router-dom";

const HomeProducts = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);


    return (
        <div className="py-11">
           <HomeTitle title={'Our Products'}></HomeTitle> 
           <div className="border-red-700 border-x-2 border-y-2 rounded-lg w-11/12 mx-auto py-3">
           <div className=" grid grid-cols-2 md:grid-cols-3 gap-3 w-11/12 mx-auto  "> 
           {
            products.slice(0,6).map(product=> <ProductCard key={product.id} product={product}></ProductCard>)
           }
           </div>
           <div className="text-center my-5">
           <Link to={`/products`}><button className="btn  bg-red-700 text-white ">Show All</button></Link>
           </div>
           </div>
        </div>
    );
};

export default HomeProducts;