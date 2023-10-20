import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Ratings from "../Products/Ratings";
import { BiArrowBack } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
const ProductDetails = () => {
    const { user } = useContext(AuthContext);
    const products = useLoaderData();
    const { id } = useParams();
    const product = products.find((card) => card._id === id);
    const { name, brandName, type, price, shortDesc, ratings, photo, desc, keyFeature } = product;
    const navigate = useNavigate();

    const handleAddToCart = () => {
        console.log(user.email);
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
        fetch("http://localhost:5000/cart", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(cartItem),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
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
                            <p className="text-3xl text-[#bf0603] font-semibold">{name}</p>
                            <button
                                onClick={() => navigate(-1)}
                                className=" text-lg bg-[#bf0603] text-white p-2 rounded-full"
                            >
                                <BiArrowBack />
                            </button>
                        </div>

                        <p className="font-medium">{shortDesc}</p>
                        <p className="font-medium">Brand: {brandName}</p>
                        <p className="text-[#bf0603] font-bold rounded-lg ">Price: {price}</p>
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
                                    className="py-2 w-full bg-[#bf0603] font-medium text-white rounded"
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
