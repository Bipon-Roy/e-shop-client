import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import CartsCard from "./CartsCard";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const Cart = () => {
    const axiosSecure = useAxiosSecure();
    const [cartList, setCartList] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        axiosSecure.get(`cart?email=${user?.email}`).then((res) => {
            setCartList(res.data);
        });
    }, [axiosSecure, user.email]);

    const isTrue = cartList.length === 0;

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
                        {cartList.map((cards) => (
                            <CartsCard
                                key={cards._id}
                                cards={cards}
                                renderCart={cartList}
                                setRenderCart={setCartList}
                            ></CartsCard>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
