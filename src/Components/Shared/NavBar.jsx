
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {

    const navLinks =
        <>
            <ul className="menu menu-vertical lg:menu-horizontal px-1 ">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink className="py-2 font-bold" style={({ isActive }) => {
                        return {
                            color: isActive ? "red" : "black",
                            backgroundColor: isActive ? "inherit" : "inherit",
                            textDecoration: isActive ? 'underline' : "none"
                        };
                    }} to="/"
                    >Home</NavLink></li>
                    <li><NavLink className="py-2 font-bold" style={({ isActive }) => {
                        return {
                            color: isActive ? "red" : "black",
                            backgroundColor: isActive ? "inherit" : "inherit",
                            textDecoration: isActive ? 'underline' : "none"
                        };
                    }} to="/products"
                    >Products</NavLink></li>
                    <li><NavLink className="py-2 font-bold" style={({ isActive }) => {
                        return {
                            color: isActive ? "red" : "black",
                            backgroundColor: isActive ? "inherit" : "inherit",
                            textDecoration: isActive ? 'underline' : "none"
                        };
                    }} to="/Services"
                    >Services</NavLink></li>
                    <li><NavLink className="py-2 font-bold" style={({ isActive }) => {
                        return {
                            color: isActive ? "red" : "black",
                            backgroundColor: isActive ? "inherit" : "inherit",
                            textDecoration: isActive ? 'underline' : "none"
                        };
                    }} to="/contact"
                    >Contact us</NavLink></li>
                    <li>
                        <details>
                            <summary className="py-2 font-bold">About US</summary>
                            <ul className="p-2">
                                <li><NavLink className="py-2 font-bold" style={({ isActive }) => {
                                    return {
                                        color: isActive ? "red" : "black",
                                        backgroundColor: isActive ? "inherit" : "inherit",
                                        textDecoration: isActive ? 'underline' : "none"
                                    };
                                }} to="/aboutUS"
                                >About Golden Boiler</NavLink></li>
                                <li><NavLink className="py-2 font-bold" style={({ isActive }) => {
                                    return {
                                        color: isActive ? "red" : "black",
                                        backgroundColor: isActive ? "inherit" : "inherit",
                                        textDecoration: isActive ? 'underline' : "none"
                                    };
                                }} to="/massage"
                                >Massage From MD</NavLink></li>
                                <li><NavLink className="py-2 font-bold" style={({ isActive }) => {
                                    return {
                                        color: isActive ? "red" : "black",
                                        backgroundColor: isActive ? "inherit" : "inherit",
                                        textDecoration: isActive ? 'underline' : "none"
                                    };
                                }} to="/gallery"
                                >Gallery</NavLink></li>
                            </ul>
                        </details>
                    </li>

                </ul>
            </ul>
        </>
    return (
        <div className={"navbar bg-white  mx-auto  fixed z-10"}>
            <div className="navbar-start ml-5">
                <div className="dropdown mr-3">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLinks
                        }
                    </ul>
                </div>

                <Link to="/"><img className="w-32" src={`https://i.ibb.co/NK9hmLC/logo-removebg-preview.png`} /></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                {
                    navLinks
                }
            </div>
        </div>
    );
};

export default NavBar;