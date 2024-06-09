import { GrServices } from "react-icons/gr";
import { Link } from "react-router-dom";
import HomeTitle from "../SectionTitle/HomeTitle";
const HomeServices = () => {
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
        <div className="py-10 mb-10">
            <HomeTitle title="Our Services"></HomeTitle>
            <div className="w-10/12 mx-auto  grid grid-cols-1 md:grid-cols-2 gap-5 text-start">
                {
                    services.map(service =>
                        <div key={service.id} className="card  bg-base-100 shadow-xl border-2 rounded-lg border-red-700">
                            <div className="card-body"
                                data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">
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
    );
};

export default HomeServices;