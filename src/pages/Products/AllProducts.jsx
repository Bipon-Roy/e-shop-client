import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://brand-shop-server-sepia.vercel.app/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);

    return (
        <div className=" dark:bg-[#0d1321]">
            <h1 className="text-center font-semibold text-4xl text-[#001219] dark:text-white">
                Featured <span className="text-primary ">Products</span>
            </h1>
            <div className="mt-2 w-28 pt-[5px] bg-primary  rounded flex justify-center mx-auto"></div>
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-4 mt-5 mx-6 lg:mx-0 pb-6">
                    {products.slice(0, 6).map((cards) => (
                        <ProductCard key={cards._id} cards={cards}></ProductCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllProducts;
