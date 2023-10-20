import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";

import { FaEye, FaEyeSlash } from "react-icons/fa";
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { logIn, signInWithGoogle, signInWithFacebook } = useContext(AuthContext);
    const route = useNavigate();
    const location = useLocation();
    const handleLogin = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");

        logIn(email, password)
            .then((result) => {
                console.log(result.user);
                route(location?.state ? location.state : "/");
                swal("Welcome!", "Login Successful!", "success");
            })
            .catch((error) => {
                console.log(error);
                swal("Eroor!", error.message, "error");
            });
    };
    const handleSocialSignIn = (method) => {
        method()
            .then((result) => {
                console.log(result.user);
                route(location?.state ? location.state : "/");
                swal("Welcome!", "Login Successful!", "success");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="flex justify-center dark:bg-[#0d1321]">
            <div
                className="my-6  px-8 py-10 w-[400px] md:w-[650px] bg-white rounded shadow shadow-black dark:shadow-white
            dark:shadow-md"
            >
                <form className="mx-auto space-y-4" onSubmit={handleLogin}>
                    <h1 className="font-bold text-xl text-[#22223b]">Login Here</h1>
                    <div className="form-control">
                        <input
                            name="email"
                            type="email"
                            placeholder="email"
                            className="input input-bordered w-full bg-white"
                            required
                        />
                    </div>

                    <div className="form-control relative">
                        <input
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="input input-bordered w-full bg-white"
                            required
                        />
                        <span
                            className="text-lg absolute top-3 right-3"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                        </span>
                    </div>

                    <div className="form-control mt-6">
                        <button className=" py-2 bg-[#284b63] font-medium text-white w-full rounded">
                            Login
                        </button>
                    </div>

                    <div className="font-medium flex justify-between">
                        New Here?
                        <Link to="/register" className="underline font-semibold text-[#3f37c9]">
                            Create an account
                        </Link>
                    </div>
                </form>

                <div className="divider font-bold my-4">Social Login</div>
                <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between">
                    <button
                        onClick={() => handleSocialSignIn(signInWithGoogle)}
                        className="font-semibold flex gap-4 px-4 py-2 bg-white rounded-3xl items-center relative border-2"
                    >
                        Continue With Google
                        <FcGoogle className=" text-3xl" />
                    </button>
                    <button
                        onClick={() => handleSocialSignIn(signInWithFacebook)}
                        className="font-semibold flex gap-4 px-4 py-2 border-2 bg-white rounded-3xl items-center "
                    >
                        Continue With Facebook
                        <FaFacebook className="text-3xl text-[#4361ee]" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
