import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Ratings from "../Products/Ratings";
import { BiArrowBack } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hook/useAxiosSecure";
const ProductDetails = () => {
    const { user } = useContext(AuthContext);

    const axiosSecure = useAxiosSecure();

    const product = useLoaderData();
    const { name, brandName, type, price, shortDesc, ratings, photo, desc, keyFeature } = product;
    const navigate = useNavigate();

    const handleAddToCart = () => {
        const userEmail = user.email;

        const cartItem = {
            userEmail,
            name,
            brandName,
            type,
            price,
            shortDesc,
            ratings,
            photo,
        };
        axiosSecure.post("/cart", cartItem).then((res) => {
            if (res.data.insertedId) {
                console.log("user added to the database");
                Swal.fire({
                    title: "Success!",
                    text: "Product Successfully Added!",
                    icon: "success",
                    confirmButtonText: "Done!",
                });
            }
        });
    };
    return (
        <div className="dark:bg-[#0d1321]">
            <div className="max-w-7xl mx-auto ">
                <div className="flex flex-col md:flex-row mx-6 lg:mx-0 pt-12 gap-10">
                    <div className="rounded-xl">
                        <img src={photo} alt={name} />
                    </div>
                    <div className="space-y-3  w-fit font-medium text-black dark:text-white">
                        <div className="flex justify-between">
                            <p className="text-3xl text-primary font-semibold">{name}</p>
                            <button
                                onClick={() => navigate(-1)}
                                className=" text-lg bg-primary text-white p-2 rounded-full"
                            >
                                <BiArrowBack />
                            </button>
                        </div>

                        <p className="font-medium">{shortDesc}</p>
                        <p className="font-medium">Brand: {brandName}</p>
                        <p className="text-primary font-bold rounded-lg ">Price: {price}</p>
                        <Ratings ratings={ratings}></Ratings>
                        <p>
                            <span className="font-bold">Description:</span> {desc}
                        </p>
                        <p>
                            <span className="font-bold">Key Feature:</span> {keyFeature}
                        </p>
                        <p>
                            <span className="font-bold">Warranty Policy:</span> 1-year
                            manufacturer&apos;s warranty
                        </p>
                        <div className="pt-10">
                            <Link>
                                <button
                                    onClick={handleAddToCart}
                                    className="py-2 w-full bg-primary font-medium text-white rounded"
                                >
                                    Add to Cart
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
