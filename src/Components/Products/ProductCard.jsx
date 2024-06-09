import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {

  const { id, name, image } = product;
  return (
    <div className="card flex flex-col   bg-base-100 shadow-xl "
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
      <div>
        <figure className=" p-3"><img className="h-36 hover:h-44" src={image} alt="products" /></figure>
      </div>
      <div className="card-body justify-end">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions justify-end">
          <Link to={`/products/${id}`}>
            <button className="btn bg-red-700 text-white">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;