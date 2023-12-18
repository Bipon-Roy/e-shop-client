import PropTypes from "prop-types";
import { AiFillDelete } from "react-icons/ai";
import Ratings from "../Products/Ratings";
import Swal from "sweetalert2";

const CartsCard = ({ cards, renderCart, setRenderCart }) => {
    console.log(typeof setRenderCart);
    const { _id, photo, name, brandName, type, price, ratings, shortDesc } = cards;

    const handleDeleteProduct = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/cart/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            console.log("deleted successfully");
                            Swal.fire("Deleted!", "Cart Item has been deleted.", "success");
                            // remove the user from the UI
                            const remainingCards = renderCart.filter((user) => user._id !== id);
                            console.log(remainingCards);
                            setRenderCart(remainingCards);
                        }
                    });
            }
        });
    };
    return (
        <div className="dark:bg-[#0d1321]">
            <div className="card lg:card-side bg-white shadow-xl p-4 lg:gap-5">
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
                            <button
                                onClick={() => handleDeleteProduct(_id)}
                                className="bg-[#c1121f] px-4 py-1 rounded text-white font-medium"
                            >
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
CartsCard.propTypes = {
    cards: PropTypes.object.isRequired,
    renderCart: PropTypes.array.isRequired,
    setRenderCart: PropTypes.func.isRequired,
};
export default CartsCard;
