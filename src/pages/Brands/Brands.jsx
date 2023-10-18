import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Brands = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/brands")
            .then((res) => res.json())
            .then((data) => {
                setBrands(data);
                console.log(data);
            });
    }, []);
    return (
        <div className="max-w-7xl mx-auto">
            <div className="mt-4">
                <h1 className="text-4xl font-bold text-center">
                    Available <span className="text-[#bf0603]">Brands</span>
                </h1>
                <div className="h-[5px] my-2 w-24 bg-[#bf0603] rounded flex justify-center mx-auto"></div>
                <div className="grid grid-cols-3 gap-4 mt-8">
                    {brands.map((brand) => (
                        <div key={brand._id}>
                            <Link>
                                <div className=" border border-gray-300 rounded-xl">
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
