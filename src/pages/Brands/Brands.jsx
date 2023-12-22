import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Brands = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/brands")
            .then((res) => res.json())
            .then((data) => {
                setBrands(data);
            });
    }, []);
    return (
        <div className="dark:bg-[#0d1321] dark:text-white">
            <div className="pt-4 max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center">
                    Available <span className="text-[#bf0603]">Brands</span>
                </h1>
                <div className="mt-2 pt-[6px] w-24 bg-[#bf0603] rounded flex justify-center mx-auto"></div>
                <div className="mx-8 lg:mx-0 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 py-12">
                    {brands.map((brand) => (
                        <div key={brand._id}>
                            <div className="bg-white p-2 rounded-xl dark:bg-[#edf2f4] shadow-md">
                                <div className="flex justify-center">
                                    <img className="h-[120px]" src={brand.photoUrl} alt="" />
                                </div>
                                <div className="m-2 ">
                                    <Link to={`/products/${brand.brandName}`}>
                                        <button className="bg-[#ff8fa3] hover:bg-[#bf0603] px-3 py-1 rounded-md font-medium text-white text-sm w-full">
                                            View Products
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Brands;
