import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, handleUpdateProfile } = useContext(AuthContext);
    const route = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        const photoURL = formData.get("photoURL");
        const email = formData.get("email");
        const password = formData.get("password");

        if (password.length < 6) {
            swal("Error!", "Password Should be at least 6 characters or longer", "error");
            return;
        } else if (!/[A-Z]/.test(password)) {
            swal("Error!", "Your password should have at least one Uppercase characters", "error");
            return;
        } else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
            swal("Error!", "Your password should have at least one Special characters", "error");
            return;
        }

        createUser(email, password)
            .then(() => {
                handleUpdateProfile(name, photoURL);
                swal("Welcome!", "Registration Successful!", "success");
                route("/");
                window.location.reload();
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <div className="px-5 md:mx-0 flex justify-center dark:bg-[#0d1321]">
            <div
                className="my-6 px-8 py-10 w-[400px] md:w-[600px] bg-white rounded shadow shadow-black dark:shadow-white
            dark:shadow-md"
            >
                <form className="mx-auto space-y-4" onSubmit={handleRegister}>
                    <h1 className="font-bold text-lg">Register Here</h1>
                    <div className="form-control">
                        <input
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full bg-white"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <input
                            name="photoURL"
                            type="text"
                            placeholder="Photo URL"
                            className="input input-bordered w-full  bg-white"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
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
                            Register
                        </button>
                    </div>

                    <div className="font-semibold flex justify-between text-lg">
                        Already have an account?
                        <Link to="/login" className="underline text-[#0353a4]">
                            Login Here
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
