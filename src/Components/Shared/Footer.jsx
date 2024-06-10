
const Footer = () => {
    return (
        <div className=" p-10 bg-black text-white ">
            <footer className="footer">
                <aside>
                    <img className="w-32" src="https://i.ibb.co/NK9hmLC/logo-removebg-preview.png" />
                    <p><span className="text-2xl font-semibold">Golden Boiler Manufacturing Co.Ltd.</span><br />The Leading Authority OF Industrial Boiler In Bangladesh</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Head Office</h6>
                    <a className="link link-hover">137/10, Mazar Road, Second Colony</a>
                    <a className="link link-hover">Mirpur-1, Dhaka-1216, Bangladesh</a>
                    <a className="link link-hover">+88 01715-153905</a>
                    <a className="link link-hover">+88 01965-511351</a>
                    <a className="link link-hover">info@goldenboiler.com.bd</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Service Point</h6>
                    <a className="link link-hover">97/3-4, North Bishil, Beribadh Road</a>
                    <a className="link link-hover">Mirpur-1, Dhaka-1216, Bangladesh</a>
                    <a className="link link-hover">+88 01965-511355</a>
                    <a className="link link-hover">+88 01955-599600</a>
                </nav>
            </footer>
            <p>Developed By <a href="https://www.linkedin.com/in/mahindipto"><span className="text-red-700">@Mahin</span></a></p>
        </div>
    );
};

export default Footer;