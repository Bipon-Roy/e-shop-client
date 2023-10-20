import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Brands = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch("https://brand-shop-server-sepia.vercel.app/brands")
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
                <div className="mx-8 lg:mx-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
                    {brands.map((brand) => (
                        <div key={brand._id}>
                            <Link to={`/products/${brand.brandName}`}>
                                <div className=" border border-gray-300 rounded-xl dark:bg-[#edf2f4]">
                                    <div className="flex justify-center">
                                        <img
                                            className=" w-[450px] h-[230px] "
                                            src={brand.photoUrl}
                                            alt=""
                                        />
                                    </div>
                                    <div className="m-2 flex justify-center">
                                        <p className="bg-[#bf0603] px-6 py-1 rounded-md font-semibold text-white w-fit">
                                            {brand.brandName}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Brands;
