import Swal from "sweetalert2";

const AddProduct = () => {
    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const shortDesc = form.shortDesc.value;
        const ratings = form.ratings.value;
        const photo = form.photo.value;

        const newProduct = { name, brandName, type, price, shortDesc, ratings, photo };

        console.log(newProduct);

        fetch("http://localhost:5000/products", {
            method: "POST",
            credentials: "include",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newProduct),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Product Added Successfully",
                        icon: "success",
                        confirmButtonText: "Done!",
                    });
                }
            });
    };
    return (
        <div className="dark:bg-[#0d1321]">
            <div className="max-w-7xl mx-auto">
                <div className="px-6 md:px-24 py-12 bg-white text-[#22223b] shadow-lg">
                    <h2 className="text-3xl font-extrabold mb-4 text-center">Add Products</h2>
                    <form onSubmit={handleAddProduct}>
                        {/* form name and quantity row */}
                        <div className="md:flex mb-8 ">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-[#22223b] font-semibold">
                                        Product Name
                                    </span>
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Product Name"
                                    className="input input-bordered w-full  bg-white"
                                />
                            </div>
                            <div className="form-control md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="label-text text-[#22223b] font-semibold">
                                        Brand Name
                                    </span>
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="brandName"
                                    placeholder="Brand Name"
                                    className="input input-bordered w-full  bg-white"
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
                                    required
                                    name="type"
                                    className="input input-bordered w-full  bg-white"
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
                                    required
                                    type="text"
                                    name="price"
                                    placeholder="Price"
                                    className="input input-bordered w-full  bg-white"
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
                                    required
                                    type="text"
                                    name="shortDesc"
                                    placeholder="Short Description"
                                    className="input input-bordered w-full  bg-white"
                                />
                            </div>
                            <div className="form-control md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="label-text text-[#22223b] font-semibold">
                                        Ratings
                                    </span>
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="ratings"
                                    placeholder="Ratings"
                                    className="input input-bordered w-full  bg-white"
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
                                    type="text"
                                    name="photo"
                                    placeholder="Photo URL"
                                    className="input input-bordered w-full  bg-white"
                                />
                            </div>
                        </div>
                        <input
                            type="submit"
                            value="Add Product"
                            className="bg-[#403d39] dark:bg-[#C1121F] w-full py-2 font-bold text-white"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
