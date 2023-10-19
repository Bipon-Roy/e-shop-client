import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import CartsCard from "./CartsCard";

const Cart = () => {
    const cartList = useLoaderData();
    console.log(cartList);
    const { user } = useContext(AuthContext);

    const newCartList = cartList.filter((product) => product.userEmail === user.email);
    const isTrue = newCartList.length === 0;

    return (
        <div className="mx-auto max-w-7xl">
            {isTrue ? (
                <div className="flex justify-center mt-10">
                    <h1 className="text-3xl font-semibold text-[#403d39]">
                        Currently No products in the Cart!!
                    </h1>
                </div>
            ) : (
                <div className="grid md:grid-cols-2 gap-5 mt-10">
                    {newCartList.map((cards) => (
                        <CartsCard key={cards._id} cards={cards}></CartsCard>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
