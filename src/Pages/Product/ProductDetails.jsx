import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Details from "../../Components/Products/Details";

const ProductDetails = () => {
    const {id} = useParams()
    const products = useLoaderData();
    const [product, setProduct] = useState()
    useEffect(()=>{
       setProduct(products.find(product=> product.id == id))
    },[id, products])
    console.log(product)
   if(product)
    {
        return (
            <div className="py-20">
                <Details product={product}></Details>
            </div>
        );
    }
    else
    {
        return(
            <div className="py-20">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        )
    }
};

export default ProductDetails;