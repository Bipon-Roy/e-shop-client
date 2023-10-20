import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { BiArrowBack } from "react-icons/bi";
const UpdateProduct = () => {
    const product = useLoaderData();
    const { _id, name, brandName, type, price, shortDesc, ratings, photo, keyFeature, desc } =
        product;

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

        console.log(updateProduct);

        fetch(`http://localhost:5000/products/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateProduct),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
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
                <div className="px-24 py-12 bg-[#ccc5b9] dark:bg-white text-[#22223b] relative">
                    <h2 className="text-3xl font-extrabold mb-4 text-center">Update Product</h2>
                    <form onSubmit={handleUpdateProduct}>
                        {/* form name and quantity row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-[#22223b] font-semibold">
                                        Product Name
                                    </span>
                                </label>

                                <input
                                    defaultValue={name}
                                    type="text"
                                    name="name"
                                    placeholder="Product Name"
                                    className="input  w-full dark:text-white font-semibold bg-white dark:bg-[#0d1321]"
                                />
                            </div>
                            <div className="form-control md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="label-text text-[#22223b] font-semibold">
                                        Brand Name
                                    </span>
                                </label>
                                <input
                                    defaultValue={brandName}
                                    type="text"
                                    name="brandName"
                                    placeholder="Brand Name"
                                    className="input input-bordered w-full  dark:text-white font-semibold bg-white dark:bg-[#0d1321]"
                                />
                            </div>
                        </div>
                        {/* form supplier row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-[#22223b] font-semibold">
                                        Product Type
                                    </span>
                                </label>
                                <select
                                    value={typeValue}
                                    onChange={handleTypeChange}
                                    name="type"
                                    className=" w-full input dark:text-white font-semibold bg-white dark:bg-[#0d1321]"
                                    placeholder="Choose Product Type"
                                >
                                    <option value="">Choose Product Category</option>
                                    <option value="Phone">Phone</option>
                                    <option value="Watch">Watch</option>
                                    <option value="Laptop">Laptop</option>
                                    <option value="Headphones">Headphones</option>
                                </select>
                            </div>
                            <div className="form-control md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="label-text text-[#22223b] font-semibold">
                                        Price
                                    </span>
                                </label>

                                <input
                                    defaultValue={price}
                                    type="text"
                                    name="price"
                                    placeholder="Price"
                                    className="input input-bordered w-full dark:text-white font-semibold bg-white dark:bg-[#0d1321]"
                                />
                            </div>
                        </div>
                        {/* form category and details row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-[#22223b] font-semibold">
                                        Short Description
                                    </span>
                                </label>

                                <input
                                    defaultValue={shortDesc}
                                    type="text"
                                    name="shortDesc"
                                    placeholder="Short Description"
                                    className="input input-bordered w-full dark:text-white font-semibold bg-white dark:bg-[#0d1321]"
                                />
                            </div>
                            <div className="form-control md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="label-text text-[#22223b] font-semibold">
                                        Ratings
                                    </span>
                                </label>
                                <input
                                    defaultValue={ratings}
                                    type="text"
                                    name="ratings"
                                    placeholder="Ratings"
                                    className="input input-bordered w-full dark:text-white font-semibold bg-white dark:bg-[#0d1321]"
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
                                    defaultValue={photo}
                                    type="text"
                                    name="photo"
                                    placeholder="Photo URL"
                                    className="input input-bordered w-full dark:text-white font-semibold bg-white dark:bg-[#0d1321]"
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
                                    defaultValue={keyFeature}
                                    type="text"
                                    name="keyFeature"
                                    placeholder="keyFeature"
                                    className="input input-bordered w-full dark:text-white font-semibold bg-white dark:bg-[#0d1321]"
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
                                    defaultValue={desc}
                                    type="text"
                                    name="desc"
                                    placeholder="desc"
                                    className="input input-bordered w-full dark:text-white font-semibold bg-white dark:bg-[#0d1321]"
                                />
                            </div>
                        </div>

                        <input
                            type="submit"
                            value="Update Product"
                            className="bg-[#403d39] dark:bg-[#023e7d] w-full py-2 font-bold text-white"
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
