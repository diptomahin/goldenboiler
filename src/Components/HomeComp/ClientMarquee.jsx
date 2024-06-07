import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import HomeTitle from "../SectionTitle/HomeTitle";


const ClientMarquee = () => {
    const [clients, setClients] = useState([])
    useEffect(() => {
        fetch('/clientlogo.json')
            .then(res => res.json())
            .then(data => setClients(data));
    }, []);

    return (
        <div className="my-10 py-11">
            <HomeTitle title={'Our Clients'}></HomeTitle>
            <Marquee className="py-5">
                {
                    clients.map(client => <img className="w-20  mx-7" key={client} src={client} />)
                }
            </Marquee>
        </div>
    );
};

export default ClientMarquee;