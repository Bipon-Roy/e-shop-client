import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import logo from "../../../assets/logo.png";
const Footer = () => {
    const { user } = useContext(AuthContext);
    const links = (
        <>
            <li className="mr-5 font-semibold">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="mr-5 font-semibold">
                <NavLink to="/about">About</NavLink>
            </li>

            {user && (
                <>
                    <li className="mr-5 font-semibold">
                        <NavLink to="/addProducts">Add Product</NavLink>
                    </li>
                    <li className="mr-5 font-semibold">
                        <NavLink to="/cart">Cart</NavLink>
                    </li>
                </>
            )}
        </>
    );

    return (
        <div className="bg-transparent pt-12  dark:bg-[#0d1321] dark:text-white">
            {/* <footer className="footer footer-center p-10 font-semibold bg-[#2b2d42] pt-12 dark:bg-[#0d1321] dark:text-white">
              
            </footer> */}
            <footer className="footer p-10  text-base-content max-w-7xl mx-auto">
                <aside>
                    <img src={logo} className="w-20 h-20" alt="" />
                    <p className="text-[#403D39] dark:text-white font-semibold">
                        eShop Industries Ltd.
                        <br />
                        Providing reliable tech since 1992
                    </p>
                </aside>
                <nav className="text-[#403D39] dark:text-white font-semibold">
                    <header className="footer-title opacity-100">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <div className="text-[#403D39] dark:text-white font-semibold list-none">
                    <header className="footer-title opacity-100">Company</header>
                    {links}
                </div>
                <nav className="text-[#403D39] dark:text-white font-semibold">
                    <header className="footer-title opacity-100">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
