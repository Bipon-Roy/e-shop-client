import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import logo from "../../../assets/logo.png";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                console.error(error);
            });
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
        <div className="">
            <nav className="navbar max-w-7xl mx-auto pr-6 lg:px-0 lg:py-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {links}
                        </ul>
                    </div>
                    <div className="flex gap-2 items-center py-1">
                        <img src={logo} className="w-[60px] h-[60px]" alt="NavLogo" />
                        <h1 className="text-2xl font-semibold">eShop</h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal px-1">{links}</ul>
                </div>
                <div className="navbar-end">
                    <div className="w-12 mr-2  md:mr-5">
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
                            <p className="text-sm md:text-base font-bold">{user.displayName}</p>

                            <button
                                className="md:px-3 md:py-2 rounded-md font-bold text-sm  md:text-base text-[#bf0603]"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link
                            to="/login"
                            className="px-5 border-2 border-[#bf0603] py-1 rounded-md font-bold"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
