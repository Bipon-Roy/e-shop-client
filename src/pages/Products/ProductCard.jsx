import { Link } from "react-router-dom";
import Ratings from "./Ratings";

const ProductCard = ({ cards }) => {
    const { photo, name, brandName, type, price, ratings } = cards;

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl p-4 gap-5">
                <figure className="px-6">
                    <img src={photo} className="w-[300px] h-[260px]" alt={name} />
                </figure>
                <div className="flex justify-between items-center w-full pr-4">
                    <div className="space-y-3 font-semibold">
                        <p className="text-lg ">
                            Name: <span className="text-[#bf0603]">{name}</span>
                        </p>
                        <p className="">Brand: {brandName}</p>
                        <p className="">Type: {type}</p>
                        <p className="text-[#bf0603]  rounded-md font-bold">Price: {price}$</p>
                        <Ratings ratings={ratings}></Ratings>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical space-y-4">
                            <button className="">Details</button>
                            <Link>
                                <button className="">Update</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
