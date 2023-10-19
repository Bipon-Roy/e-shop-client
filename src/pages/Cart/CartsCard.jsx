import { AiFillDelete } from "react-icons/ai";
import Ratings from "../Products/Ratings";
const CartsCard = ({ cards }) => {
    const { photo, name, brandName, type, price, ratings, shortDesc } = cards;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl p-4 lg:gap-5 mx-6 lg:mx-0">
                <figure className="px-6">
                    <img src={photo} className="w-[320px] h-[260px]" alt={name} />
                </figure>
                <div className="flex flex-col lg:flex-row justify-between items-center w-full pr-4 mt-3 lg-mt-0">
                    <div className="space-y-3 font-semibold">
                        <p className="text-lg ">
                            Name: <span className="text-[#bf0603]">{name}</span>
                        </p>
                        <p>{shortDesc}</p>
                        <p className="">Brand: {brandName}</p>
                        <p className="">Type: {type}</p>
                        <p className="text-[#bf0603]  rounded-md font-bold">Price: {price}$</p>
                        <Ratings ratings={ratings}></Ratings>
                        <div className="flex justify-between pt-3">
                            <button className="bg-[#403D39] px-[27px] py-1 rounded text-white font-medium ">
                                Buy Now
                            </button>
                            <button className="bg-[#c1121f] px-4 py-1 rounded text-white font-medium">
                                <span className="flex items-center gap-1">
                                    Delete <AiFillDelete className="text-xl" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartsCard;
