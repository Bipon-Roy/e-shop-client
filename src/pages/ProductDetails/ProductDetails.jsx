import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Ratings from "../Products/Ratings";
import { BiArrowBack } from "react-icons/bi";
const ProductDetails = () => {
    const products = useLoaderData();
    const { id } = useParams();
    const product = products.find((card) => card._id === id);
    const { photo, name, brandName, price, ratings, shortDesc } = product;
    const navigate = useNavigate();
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex mx-6 lg:mx-0 mt-12 gap-10">
                <div className="rounded-xl">
                    <img src={photo} alt={name} />
                </div>
                <div className="space-y-3  w-fit font-medium text-black ">
                    <div className="flex justify-between">
                        <p className="text-3xl text-[#bf0603] font-semibold">{name}</p>
                        <button
                            onClick={() => navigate(-1)}
                            className=" text-xl bg-[#bf0603] text-white rounded-full p-2"
                        >
                            <BiArrowBack />
                        </button>
                    </div>

                    <p className="font-medium">{shortDesc}</p>
                    <p className="font-medium">Brand: {brandName}</p>
                    <p className="text-[#bf0603] font-bold rounded-lg ">Price: {price}</p>
                    <Ratings ratings={ratings}></Ratings>
                    <p>
                        <span className="font-semibold">Warranty Policy:</span> 1-year
                        manufacturer&apos;s warranty
                    </p>
                    <div className="pt-10">
                        <button className="py-2 w-1/2 bg-[#bf0603] font-medium text-white rounded">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
