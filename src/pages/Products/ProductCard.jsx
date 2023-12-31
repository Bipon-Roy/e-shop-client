import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Ratings from "./Ratings";
import { RxUpdate } from "react-icons/rx";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const ProductCard = ({ cards }) => {
    const { _id, photo, name, brandName, type, price, ratings } = cards;
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className="card lg:card-side bg-white shadow-xl p-4 lg:gap-5 ">
                <figure className="px-6">
                    <img src={photo} className="w-[300px] h-[260px]" alt={name} />
                </figure>
                <div className="flex flex-col lg:flex-row justify-between items-center w-full pr-4 mt-3 lg-mt-0">
                    <div className="space-y-3 font-semibold">
                        <p className="text-lg ">
                            Name: <span className="text-[#bf0603]">{name}</span>
                        </p>
                        <p className="">Brand: {brandName}</p>
                        <p className="">Type: {type}</p>
                        <p className="text-[#bf0603]  rounded-md font-bold">Price: {price}$</p>
                        <Ratings ratings={ratings}></Ratings>
                    </div>
                    <div className="card-actions">
                        <div className="btn-group btn-group-vertical space-y-4 mt-4 lg:mt-0">
                            <Link to={`/productDetails/${_id}`}>
                                <button className="bg-[#e63946] px-[27px] py-1 rounded text-white font-medium ">
                                    Details
                                </button>
                            </Link>
                            {user && (
                                <Link to={`/updateProduct/${_id}`}>
                                    <button className="bg-[#eb5e28] px-4 py-1 rounded text-white font-medium">
                                        <span className="flex items-center gap-1">
                                            Update <RxUpdate />
                                        </span>
                                    </button>
                                </Link>
                            )}
                            <Link to={`/productDetails/${_id}`}>
                                <button className="bg-green-500 px-5 py-1 rounded text-white font-medium ">
                                    Buy Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    cards: PropTypes.object.isRequired,
};
export default ProductCard;
