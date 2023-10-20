const Banner = () => {
    return (
        <div className="dark:bg-[#0d1321]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row py-6 md:gap-8 mx-6 lg:mx-0">
                    <div className=" space-y-8 text-black my-auto">
                        <h1 className="font-bold text-3xl lg:text-5xl dark:text-white">
                            Elevate Your <span className="text-[#bf0603]">Digital Lifestyle</span>
                        </h1>
                        <p className=" font-semibold lg:text-lg dark:text-white">
                            Shop our curated collection of electronics - from sleek laptops to
                            powerful smartphones. Embrace the future of innovation.
                        </p>
                    </div>
                    <div className="mt-5 md:mt-0">
                        <img
                            className="rounded-lg"
                            src="https://i.ibb.co/6sbjFY3/Hero.jpg"
                            alt="HeroImage"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
