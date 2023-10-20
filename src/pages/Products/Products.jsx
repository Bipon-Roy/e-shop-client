import { useLoaderData, useParams } from "react-router-dom";
import Slider from "./Slider";
import ProductCard from "./ProductCard";

const Products = () => {
    const products = useLoaderData();

    const { brandName } = useParams();
    const newProducts = products.filter((product) => product.brandName === brandName);
    const isTrue = newProducts.length === 0;
    return (
        <div className="dark:bg-[#0d1321]">
            <div className="max-w-7xl mx-auto">
                <div>
                    <Slider />
                </div>
                {isTrue ? (
                    <div className="flex justify-center mt-10">
                        <h1 className="text-3xl font-semibold text-[#403d39]">
                            Currently No products are available in this category!!
                        </h1>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 gap-4 mt-10 mx-6 lg:mx-0">
                        {newProducts.map((cards) => (
                            <ProductCard key={cards._id} cards={cards}></ProductCard>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Products;
