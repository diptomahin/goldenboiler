
const ProductCard = ({product}) => {

    const { name, image} = product ;
    return (
        <div className="card flex flex-col   bg-base-100 shadow-xl ">
       <div>
       <figure className=" p-3"><img className="h-36 hover:h-44" src={image} alt="products" /></figure>
       </div>
        <div className="card-body justify-end">
          <h2 className="card-title">{name}</h2>
          <div className="card-actions justify-end">
            <button className="btn bg-red-700 text-white">See Details</button>
          </div>
        </div>
      </div>
    );
};

export default ProductCard;