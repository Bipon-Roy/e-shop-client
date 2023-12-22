import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { BiArrowBack } from "react-icons/bi";
import useAxiosSecure from "../../Hook/useAxiosSecure";
const UpdateProduct = () => {
    const product = useLoaderData();
    const { _id, name, brandName, type, price, shortDesc, ratings, photo, keyFeature, desc } =
        product;
    const axiosSecure = useAxiosSecure();
    const [typeValue, setTypeValue] = useState(type);
    const navigate = useNavigate();
    const handleTypeChange = (e) => {
        const newType = e.target.value;
        setTypeValue(newType);
    };
    const handleUpdateProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const shortDesc = form.shortDesc.value;
        const ratings = form.ratings.value;
        const photo = form.photo.value;
        const desc = form.desc.value;
        const keyFeature = form.keyFeature.value;

        const updateProduct = {
            _id,
            name,
            brandName,
            type,
            price,
            shortDesc,
            ratings,
            photo,
            desc,
            keyFeature,
        };

        axiosSecure.put(`/products/${_id}`, updateProduct).then((data) => {
            console.log(data);
            if (data.status === 200) {
                Swal.fire({
                    title: "Success!",
                    text: "Product Updated Successfully",
                    icon: "success",
                    confirmButtonText: "Done",
                });
            }
        });
    };
    return (
        <div className="dark:bg-[#0d1321]">
            <div className="max-w-7xl mx-auto">
                <div className="px-6 md:px-24 py-12 bg-white text-[#22223b] relative shadow-lg">
                    <h2 className="text-3xl font-extrabold mb-4 text-center">Update Product</h2>
                    <form onSubmit={handleUpdateProduct}>
                        {/* form name and quantity row */}
                        <div className="md:flex mb-8">
                            <div className="form-control  md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-[#22223b] font-semibold">
                                        Product Name
                                    </span>
                                </label>

                                <input
                                    required
                                    defaultValue={name}
                                    type="text"
                                    name="name"
                                    placeholder="Product Name"
                                    className="input input-bordered w-full font-semibold bg-white "
                                />
                            </div>
                            <div className="form-control  md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="label-text text-[#22223b] font-semibold">
                                        Brand Name
                                    </span>
                                </label>
                                <input
                                    required
                                    defaultValue={brandName}
                                    type="text"
                                    name="brandName"
                                    placeholder="Brand Name"
                                    className="input input-bordered w-full  font-semibold bg-white "
                                />
                            </div>
                        </div>
                        {/* form supplier row */}
                        <div className="md:flex mb-8">
                            <div className="form-control  md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-[#22223b] font-semibold">
                                        Product Type
                                    </span>
                                </label>
                                <select
                                    required
                                    value={typeValue}
                                    onChange={handleTypeChange}
                                    name="type"
                                    className=" w-full input input-bordered  font-semibold bg-white "
                                    placeholder="Choose Product Type"
                                >
                                    <option value="">Choose Product Category</option>
                                    <option value="Phone">Phone</option>
                                    <option value="Watch">Watch</option>
                                    <option value="Laptop">Laptop</option>
                                    <option value="Headphones">Headphones</option>
                                </select>
                            </div>
                            <div className="form-control  md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="label-text text-[#22223b] font-semibold">
                                        Price
                                    </span>
                                </label>

                                <input
                                    required
                                    defaultValue={price}
                                    type="text"
                                    name="price"
                                    placeholder="Price"
                                    className="input input-bordered w-full font-semibold bg-white "
                                />
                            </div>
                        </div>
                        {/* form category and details row */}
                        <div className="md:flex mb-8">
                            <div className="form-control  md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-[#22223b] font-semibold">
                                        Short Description
                                    </span>
                                </label>

                                <input
                                    required
                                    defaultValue={shortDesc}
                                    type="text"
                                    name="shortDesc"
                                    placeholder="Short Description"
                                    className="input input-bordered w-full font-semibold bg-white "
                                />
                            </div>
                            <div className="form-control  md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="label-text text-[#22223b] font-semibold">
                                        Ratings
                                    </span>
                                </label>
                                <input
                                    required
                                    defaultValue={ratings}
                                    type="text"
                                    name="ratings"
                                    placeholder="Ratings"
                                    className="input input-bordered w-full font-semibold bg-white "
                                />
                            </div>
                        </div>
                        {/* form Photo url row */}
                        <div className="mb-8">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-[#22223b] font-semibold">
                                        Photo URL
                                    </span>
                                </label>
                                <input
                                    required
                                    defaultValue={photo}
                                    type="text"
                                    name="photo"
                                    placeholder="Photo URL"
                                    className="input input-bordered w-full font-semibold bg-white "
                                />
                            </div>
                        </div>

                        <div className="mb-8">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-[#22223b] font-semibold">
                                        Key Feature
                                    </span>
                                </label>
                                <input
                                    required
                                    defaultValue={keyFeature}
                                    type="text"
                                    name="keyFeature"
                                    placeholder="keyFeature"
                                    className="input input-bordered w-full font-semibold bg-white "
                                />
                            </div>
                        </div>

                        <div className="mb-8">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-[#22223b] font-semibold">
                                        Description
                                    </span>
                                </label>
                                <input
                                    required
                                    defaultValue={desc}
                                    type="text"
                                    name="desc"
                                    placeholder="desc"
                                    className="input input-bordered w-full font-semibold bg-white "
                                />
                            </div>
                        </div>

                        <input
                            type="submit"
                            value="Update Product"
                            className="bg-[#403d39] dark:bg-[#C1121F] w-full py-2 font-bold text-white"
                        />
                    </form>
                    <div className="absolute top-3 right-3 ">
                        <button
                            onClick={() => navigate(-1)}
                            className="text-base bg-[#403d39]  text-white rounded-full p-2"
                        >
                            <BiArrowBack />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;
