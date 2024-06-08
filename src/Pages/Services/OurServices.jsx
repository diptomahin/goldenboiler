import { Link } from "react-router-dom";
import HomeTitle from "../../Components/SectionTitle/HomeTitle";
import { GrServices } from "react-icons/gr";

const OurServices = () => {
  const services = [
    {
      "id": 1,
      "name": "Boiler Maintenance and Repair",
      "description": "Comprehensive maintenance and repair services for various types of boilers to ensure optimal performance and longevity."
    },
    {
      "id": 2,
      "name": "Steam Line Design & Installation",
      "description": "Expert design and installation of steam lines to meet industry standards and operational requirements."
    },
    {
      "id": 3,
      "name": "Washing Plant Planning, Design & Installation",
      "description": "Planning, designing, and installing washing plants tailored to specific industry needs for efficient operations."
    },
    {
      "id": 4,
      "name": "Boiler Chemical Supply",
      "description": "Supply of high-quality chemicals necessary for the safe and efficient operation of boilers."
    }
  ]
  return (
    <div className="hero min-h-screen py-20 bg-base-200">
      <div className="hero-content ">
        <div className="w-11/12 mx-auto text-center">
          <HomeTitle title="Our Services"></HomeTitle>
          <p className="py-6">All Kinds of Boiler Installation, Accessories Supply & Setting Repairing, All damaged parts Replacement, setting & Running for Different Industries like Garments, Textile, Dyeing, Washing Plant, Food Factory & Pharmaceutical and so on.</p>
          <div className="w-10/12 mx-auto my-10 py-10 grid grid-cols-1 md:grid-cols-2 gap-5 text-start">
            {
              services.map(service =>
                <div key={service.id} className="card  bg-base-100 shadow-xl border-2 rounded-lg border-red-700">
                  <div className="card-body">
                    <div className="flex gap-5 items-center">
                      <h2 className=""><GrServices className="text-3xl text-red-700" /></h2>
                      <h2 className="card-title">{service.name}</h2>
                    </div>
                    <hr />
                    <p>{service.description}</p>
                    <div className="card-actions justify-end">
                      <Link to={`/contact`}>
                      <button className="btn  bg-red-700 text-white hover:bg-white hover:text-red-700">Send inquiry</button>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;