const Banner = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto flex items-center ">
                <div className="flex items-center my-6">
                    <div className="text-center space-y-4 w-3/4 text-black">
                        <h1 className="font-bold text-3xl md:text-5xl">
                            Elevate Your Digital Lifestyle
                        </h1>
                        <p className=" font-semibold md:text-xl">
                            Shop our curated collection of electronics - from sleek laptops to
                            powerful smartphones. Embrace the future of innovation.
                        </p>
                    </div>
                    <div className="bg-[#edf6f9] rounded-full">
                        <img
                            className="py-7 px-5"
                            src="https://i.ibb.co/LJL7Yrp/1-removebg-preview.png"
                            alt="HeroImage"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
