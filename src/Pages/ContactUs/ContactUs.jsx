import { FaLocationDot } from "react-icons/fa6";
const ContactUs = () => {
    return (
        <div className="hero min-h-screen py-20">
            <div className="hero-content flex-col gap-7 lg:flex-row-reverse">
                <div className="text-left " data-aos="zoom-in-up">
                    <h1 className="text-5xl font-bold">Contact Information</h1>
                    <div className="grid grid-cols-1 gap-5 my-6 lg:grid-cols-2 ">
                        <div className="">
                            <h6 className="footer-title text-center text-red-700 flex items-center"><FaLocationDot />Head Office</h6>
                            <p className="link link-hover">137/10, Mazar Road, Second Colony</p>
                            <p className="link link-hover">Mirpur-1, Dhaka-1216, Bangladesh</p>
                            <p className="link link-hover">+88 01715-153905</p>
                            <p className="link link-hover">+88 01965-511351</p>
                            <p className="link link-hover">info@goldenboiler.com.bd</p>
                        </div>
                        <div className="">
                            <h6 className="footer-title text-center text-red-700  flex items-center"><FaLocationDot />Service Point</h6>
                            <p className="link link-hover">97/3-4, North Bishil, Beribadh Road</p>
                            <p className="link link-hover">Mirpur-1, Dhaka-1216, Bangladesh</p>
                            <p className="link link-hover">+88 01965-511355</p>
                            <p className="link link-hover">+88 01955-599600</p>
                        </div>
                    </div>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                >
                    <form className="card-body border-2 rounded-lg border-red-700">
                        <h1 className="text-3xl font-bold text-center">Get In Touch</h1>
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
    );
};

export default ContactUs;