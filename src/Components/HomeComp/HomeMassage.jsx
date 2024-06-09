import { Link } from "react-router-dom";

const HomeMassage = () => {
    return (
        <div className="hero " >
        <div className="hero-content  flex flex-col lg:flex-row gap-3 w-10/12 mx-auto" data-aos="fade-up">
            <img className="border-x-2 border-y-2 rounded-full" src="https://i.ibb.co/Nrp1M5S/ceo-removebg-preview.png" />
            <div>
                <h1 className="text-5xl font-bold">MESSAGE FROM MANAGING DIRECTOR</h1>
                <p className="py-6">Goldenboiler Manufacturing Co. Ltd. is now Twenty Three Years of services in the Boiler Manufacturing Industry & the first Manufacturer to producing big wastage, Gas, Oil, Coal Fired Boiler in Bangladesh. We serve a growing number of local and international customers who depend on superior, reliable boilers in their everyday operations in a variety of industries. Each boiler is custom designed by our engineers and built by a team of our experienced employees to perform efficiently and safely in its unique application.....<Link to={`/massage`}><span className="text-red-700 font-semibold">Read more</span></Link></p>
            </div>
        </div>
    </div>
    );
};

export default HomeMassage;