

const Details = ({ product }) => {
    const { name, image, type, capacity, additional, img } = product
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-4xl py-5 text-red-700 font-semibold">{name}</h1>
            <div className="border-4 border-red-700 rounded-lg">
                <div className="card grid grid-cols-1 md:grid-cols-2 bg-base-100 shadow-xl p-5 ">
                    <figure><img className="" src={image} alt="Album" /></figure>
                    <div className="card-body">
                        <p style={{ textDecoration: 'underline' }} className="text-xl font-semibold">Capacity: <span className="">{capacity}</span></p>
                        <p style={{ textDecoration: 'underline' }} className="text-xl font-semibold">Type: <span>{type}</span></p>
                        <hr />
                        {
                            additional.map(info => <li className="text-lg font-semibold" key={info}>{info}</li>)
                        }
                    </div>
                </div>
                <div className="text-center w-full mx-autobg-base-300">
                    <img className="my-10 p-3  mx-auto" src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Details;