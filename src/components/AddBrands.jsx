// import Swal from "sweetalert2";
// const AddBrands = () => {
//     const handleAddCoffee = (e) => {
//         e.preventDefault();
//         const form = e.target;
//         const brandName = form.brandName.value;
//         const photoUrl = form.photoUrl.value;
//         const newBrands = { brandName, photoUrl };

//         // fetch("https://brand-shop-server-sepia.vercel.app/brands", {
//         //     method: "POST",
//         //     credentials: "include",
//         //     headers: {
//         //         "content-type": "application/json",
//         //     },
//         //     body: JSON.stringify(newBrands),
//         // })
//         //     .then((res) => res.json())
//         //     .then((data) => {
//         //         console.log(data);

//         //         if (data.insertedId) {
//         //             form.reset();
//         //             Swal.fire({
//         //                 title: "Success!",
//         //                 text: "Item Added Successfully",
//         //                 icon: "success",
//         //                 confirmButtonText: "Done!",
//         //             });
//         //         }
//         //     });
//     };
//     return (
//         <div className="max-w-7xl mx-auto">
//             <div className=" p-24 flex justify-center">
//                 <form onSubmit={handleAddCoffee}>
//                     {/* form name and quantity row */}
//                     <div className="mb-8 w-[500px]">
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Brand Name</span>
//                             </label>
//                             <label className="input-group">
//                                 <input
//                                     type="text"
//                                     name="brandName"
//                                     className="input input-bordered w-full"
//                                 />
//                             </label>
//                         </div>
//                         <div className="form-control ">
//                             <label className="label">
//                                 <span className="label-text">Brand Image</span>
//                             </label>
//                             <label className="input-group">
//                                 <input
//                                     type="text"
//                                     name="photoUrl"
//                                     className="input input-bordered w-full"
//                                 />
//                             </label>
//                         </div>
//                         <br />
//                         <input type="submit" value="Add Brand" className="btn btn-block" />
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AddBrands;
