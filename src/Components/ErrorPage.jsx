import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="bg-white min-h-screen text-center">
          <div className="pt-20">
          <h1 className="text-red-700 font-bold text-7xl">404</h1> 
           <p className="text-red-700 font-bold text-7xl">Page not found</p>
           <Link to={`/`}><button className="btn bg-red-700 text-white font-semibold text-4xl mt-20">Home</button></Link>
          </div>
        </div>
    );
};

export default ErrorPage;