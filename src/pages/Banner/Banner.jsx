import Lottie from "lottie-react";
import shoppingAnimation from "../../assets/lottie.json";

const Banner = () => {
    return (
        <div
            className="min-h-[50vh] lg:min-h-screen flex items-center justify-center  mx-0 md:mx-4 lg:mx-0 dark:bg-[#0d1321]"
            style={{
                backgroundImage:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),url(https://i.ibb.co/7yzVpzC/workplace.jpg)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row py-6 md:gap-8 mx-6 lg:mx-0">
                    <div className=" space-y-8 text-black my-auto">
                        <h1 className="font-bold text-3xl lg:text-5xl text-white">
                            Elevate Your <span className="text-[#ff4c4c]">Digital Lifestyle</span>
                        </h1>
                        <p className=" font-semibold lg:text-lg text-white">
                            Shop our curated collection of electronics - from sleek laptops to
                            powerful smartphones. Embrace the future of innovation.
                        </p>
                    </div>
                    <div className="mt-5 md:mt-0 md:w-3/4 lg:w-1/2 ">
                        <Lottie animationData={shoppingAnimation} loop={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
