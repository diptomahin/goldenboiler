import HomeTitle from "../SectionTitle/HomeTitle";

const HomeContact = () => {
    return (
        <div>
            <HomeTitle title="Contact US"></HomeTitle>
            <div className="hero py-10 w-11/12 mx-auto">

                <div className="hero-content flex-col gap-7 lg:flex-row-reverse">
                    <div className="text-left " data-aos="zoom-in-down">
                        <img className="" src={`https://i.ibb.co/Yc2MQ0F/home-contact-image.png`} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100"  data-aos="zoom-in">
                        <form className="card-body border-2 rounded-lg border-red-700">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <input type="subject" placeholder="subject" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Massage</span>
                                </label>
                                <textarea placeholder="massage" className="input input-bordered" required></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white bg-red-700">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContact;