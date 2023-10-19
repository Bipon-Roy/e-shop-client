import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Ratings from "./Ratings";
import { RxUpdate } from "react-icons/rx";
const ProductCard = ({ cards }) => {
    const { _id, photo, name, brandName, type, price, ratings } = cards;

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl p-4 lg:gap-5 mx-6 lg:mx-0">
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
                            <Link to={`/updateProduct/${_id}`}>
                                <button className="bg-[#eb5e28] px-4 py-1 rounded text-white font-medium">
                                    <span className="flex items-center gap-1">
                                        Update <RxUpdate />
                                    </span>
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
