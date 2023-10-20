import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import CartsCard from "./CartsCard";

const Cart = () => {
    const cartList = useLoaderData();
    const { user } = useContext(AuthContext);

    const newCartList = cartList.filter((product) => product.userEmail === user.email);
    const isTrue = newCartList.length === 0;
    const [renderCart, setRenderCart] = useState(newCartList);
    return (
        <div className="dark:bg-[#0d1321]">
            <div className="mx-auto max-w-7xl">
                {isTrue ? (
                    <div className="flex justify-center pt-10">
                        <h1 className="text-3xl font-semibold text-[#403d39]">
                            Currently No products in the Cart!!
                        </h1>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 gap-5 pt-10 mx-6 lg:mx-0">
                        {renderCart.map((cards) => (
                            <CartsCard
                                key={cards._id}
                                cards={cards}
                                renderCart={renderCart}
                                setRenderCart={setRenderCart}
                            ></CartsCard>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
