import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import logo from "../../../assets/Logo.png";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });
    const handleLogout = () => {
        logOut()
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleDarkMood = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
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
        <div className="dark:bg-[#0d1321] dark:text-white">
            <nav className="navbar max-w-7xl mx-auto pr-6 lg:px-0 lg:py-2 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost p-1 lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 25 25"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white dark:text-black rounded-box w-52"
                        >
                            {links}
                        </ul>
                    </div>
                    <div className="flex gap-1 items-center py-1">
                        <img
                            src={logo}
                            className="w-10 h-8 md:w-[70px] md:h-[60px]"
                            alt="NavLogo"
                        />
                        <h1 className="text-base md:text-2xl font-semibold">eShop</h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal px-1">{links}</ul>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center">
                        <button onClick={handleDarkMood}>
                            {theme === "dark" ? (
                                <MdOutlineLightMode className="text-2xl md:text-3xl mr-4" />
                            ) : (
                                <MdDarkMode className="text-2xl md:text-3xl mr-4" />
                            )}
                        </button>
                    </div>
                    <div className="w-8 md:w-10 mr-2  md:mr-5">
                        {user && (
                            <img
                                className="rounded-full"
                                src={user.photoURL}
                                alt={user.displayName}
                            />
                        )}
                    </div>

                    {user ? (
                        <div className="flex items-center gap-3">
                            <p className="text-xs md:text-base font-bold">{user.displayName}</p>

                            <button
                                className="md:px-3 md:py-2 rounded-md font-bold text-xs  md:text-base text-[#bf0603]"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div>
                            <Link
                                to="/login"
                                className="px-5 border-2 border-[#bf0603] py-1 rounded-md font-bold"
                            >
                                Login
                            </Link>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
