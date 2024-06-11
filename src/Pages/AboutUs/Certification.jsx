import HomeTitle from "../../Components/SectionTitle/HomeTitle";

const Certification = () => {
    const certificates = [
        {
            "name": "Import Registration Certificate",
            "url": "https://i.ibb.co/rZDRb3d/Import-Registration-Certificate.png"
        },
        {
            "name": "Export Registration Certificate",
            "url": "https://i.ibb.co/m5q1Zjv/Export-Registration-Certificate.png"
        }
    ];
    return (
        <div className="py-24">
            <HomeTitle title={'Certifications'}></HomeTitle>
            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-2 lg:gap-3">
                {
                    certificates.map(Image =>
                        <div key={Image.url}
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                            className="card  bg-base-100 shadow-xl">
                            <div className="card-body ">
                                <h2 className="card-title text-center text-red-700">
                                    {Image.name}
                                </h2>
                            </div>
                            <figure><img className="" src={Image.url} alt="Images" /></figure>

                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Certification;