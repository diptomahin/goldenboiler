import { useEffect, useState } from "react";
import HomeTitle from "../../Components/SectionTitle/HomeTitle";
import ProductCard from "../../Components/Products/ProductCard";

const AllProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);


    return (
        <div className="pt-24">
           <HomeTitle title={'All Products'}></HomeTitle> 
           <div className=" w-11/12 mx-auto py-3">
           <div className=" grid grid-cols-2 md:grid-cols-3 gap-3 w-11/12 mx-auto  "> 
           {
            products.map(product=> <ProductCard key={product.id} product={product}></ProductCard>)
           }
           </div>
           </div>
        </div>
    );
};

export default AllProducts;