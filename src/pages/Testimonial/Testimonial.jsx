import Ratings from "../Products/Ratings";

const Testimonial = () => {
    return (
        <div className="dark:bg-[#0d1321]">
            <div className="max-w-7xl mx-auto py-10">
                <h1 className="text-center font-semibold text-4xl text-[#001219] dark:text-white">
                    Client <span className="text-[#bf0603] ">Reviews</span>
                </h1>
                <div className="mt-2 w-20 pt-[5px] bg-[#bf0603]  rounded flex justify-center mx-auto"></div>
                <div className="grid grid-cols-1 mx-5 lg:mx-0 md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-0 gap-y-8 pt-8">
                    <div className=" shadow-xl bg-white lg:w-96">
                        <figure className="">
                            <img
                                src="https://i.ibb.co/zJwdbNn/1-3.jpg"
                                alt="John Smith"
                                className="w-full"
                            />
                        </figure>
                        <div className="card-body items-center text-center pt-2">
                            <h2 className="card-title  text-xl font-bold ">
                                Name:<span className="text-[#bf0603]">John Smith</span>
                            </h2>
                            <p className="font-medium">
                                I recently purchased a laptop from your website, and I couldn&apos;t
                                be happier. The selection is fantastic, and the customer service is
                                top-notch. The laptop arrived quickly, and it has completely
                                transformed my work experience. Thank you!
                            </p>
                            <div className="card-actions">
                                <Ratings ratings={"4"}></Ratings>
                            </div>
                        </div>
                    </div>

                    <div className=" shadow-xl bg-white lg:w-96">
                        <figure className="">
                            <img
                                src="https://i.ibb.co/W2v9TJ4/1-1.jpg"
                                alt="Sarah Johnson"
                                className="w-full"
                            />
                        </figure>
                        <div className="card-body items-center text-center pt-2">
                            <h2 className="card-title  text-xl font-bold ">
                                Name:<span className="text-[#bf0603]">Sarah Johnson</span>
                            </h2>
                            <p className="font-medium">
                                As a tech enthusiast, I&apos;ve been shopping for various
                                electronics on your site for years. The range of products, from
                                smartphones to headphones, is impressive. The quality and service
                                are unmatched. I highly recommend it to everyone.
                            </p>
                            <div className="card-actions">
                                <Ratings ratings={"5"}></Ratings>
                            </div>
                        </div>
                    </div>

                    <div className=" shadow-xl bg-white lg:w-96">
                        <figure className="">
                            <img
                                src="https://i.ibb.co/Tv0gDsT/1-4.jpg"
                                alt="Michael Clark"
                                className="w-full"
                            />
                        </figure>
                        <div className="card-body items-center text-center pt-2">
                            <h2 className="card-title  text-xl font-bold ">
                                Name:<span className="text-[#bf0603]">Michael Clark</span>
                            </h2>
                            <p className="font-medium">
                                I bought a new smartphone from your website, and it&apos;s been a
                                game-changer. The site&apos;s user-friendly interface made it easy
                                to find the perfect phone. The delivery was prompt, and the phone
                                exceeded my expectations. I&apos;m a satisfied customer.
                            </p>
                            <div className="card-actions">
                                <Ratings ratings={"5"}></Ratings>
                            </div>
                        </div>
                    </div>

                    <div className=" shadow-xl bg-white lg:w-96">
                        <figure className="">
                            <img
                                src="https://i.ibb.co/6tQFTz3/1-2.jpg"
                                alt="Emily Davis"
                                className="w-full"
                            />
                        </figure>
                        <div className="card-body items-center text-center pt-2">
                            <h2 className="card-title  text-xl font-bold ">
                                Name:<span className="text-[#bf0603]">Emily Davisk</span>
                            </h2>
                            <p className="font-medium">
                                I&apos;m a frequent shopper on your website for all my electronics
                                needs. The watch I purchased recently has been a great addition to
                                my collection. The wide variety and detailed product descriptions
                                make shopping a breeze. I&apos;m thrilled with my purchase!
                            </p>
                            <div className="card-actions">
                                <Ratings ratings={"4"}></Ratings>
                            </div>
                        </div>
                    </div>

                    <div className=" shadow-xl bg-white lg:w-96">
                        <figure className="">
                            <img
                                src="https://i.ibb.co/zGSkgL8/people-1.jpg"
                                alt="Jessica Miller"
                                className="w-full"
                            />
                        </figure>
                        <div className="card-body items-center text-center pt-2">
                            <h2 className="card-title  text-xl font-bold ">
                                Name:<span className="text-[#bf0603]">Jessica Miller</span>
                            </h2>
                            <p className="font-medium">
                                I was in search of a high-performance laptop, and your website had
                                the perfect one. The customer support team was extremely helpful in
                                guiding me to the right choice. The laptop arrived in great
                                condition and has been a game-changer for my work. Thank you for a
                                great experience.
                            </p>
                            <div className="card-actions">
                                <Ratings ratings={"4"}></Ratings>
                            </div>
                        </div>
                    </div>
                    <div className=" shadow-xl bg-white lg:w-96">
                        <figure className="">
                            <img
                                src="https://i.ibb.co/SxB8wdD/people-2.jpg"
                                alt="Mark Anderson"
                                className="w-full"
                            />
                        </figure>
                        <div className="card-body items-center text-center pt-2">
                            <h2 className="card-title  text-xl font-bold ">
                                Name:<span className="text-[#bf0603]">Mark Anderson</span>
                            </h2>
                            <p className="font-medium">
                                I was in search of a high-performance laptop, and your website had
                                the perfect one. The customer support team was extremely helpful in
                                guiding me to the right choice. The laptop arrived in great
                                condition and has been a game-changer for my work. Thank you for a
                                great experience.
                            </p>
                            <div className="card-actions">
                                <Ratings ratings={"4"}></Ratings>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
