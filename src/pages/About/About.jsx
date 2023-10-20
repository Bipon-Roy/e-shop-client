const About = () => {
    return (
        <div className="dark:bg-[#0d1321] text-white">
            <div className="max-w-7xl mx-auto pt-3">
                <h1 className="text-center font-semibold text-4xl">
                    About <span className="text-[#bf0603] ">Us</span>
                </h1>
                <div className="h-[5px] w-20 pt-2 bg-[#bf0603]  rounded flex justify-center mx-auto"></div>
                <div className="grid lg:grid-cols-2 gap-8 pt-8 pb-10 mx-5 ">
                    <div className="">
                        <img
                            src="https://i.ibb.co/hMJG5k5/e-commerce-vn-546.jpg"
                            className="h-full w-full rounded-2xl"
                            alt="Team Members Photo"
                        />
                    </div>
                    <div className="text-black space-y-3 dark:text-white">
                        <h1 className="text-3xl font-bold  text-center">
                            <span className="text-[#bf0603] ">Welcome to eShop </span> - Your
                            Trusted Source for Premium Electronics!
                        </h1>
                        <p className="font-medium">
                            At eShop, we are passionate about technology and committed to providing
                            you with the latest and greatest electronics products. With a dedication
                            to quality, innovation, and customer satisfaction, we&apos;ve become a
                            go-to destination for tech enthusiasts, gadget lovers, and everyday
                            consumers.
                        </p>
                        <p className="text-[#bf0603]  text-2xl font-bold text-center">
                            Why Choose Us?
                        </p>
                        <div className="space-y-4">
                            <p>
                                <span className="text-[#403D39] dark:text-[#bf0603] font-extrabold mr-1">
                                    Wide Product Selection:
                                </span>
                                Discover a wide range of electronic products, from cutting-edge
                                smartphones to high-performance laptops and more, all under one
                                roof.
                            </p>
                            <p>
                                <span className="text-[#403D39] dark:text-[#bf0603] font-extrabold mr-1">
                                    Quality Assurance:
                                </span>
                                Our commitment to quality means you can trust in the products we
                                offer. We source from reputable brands and manufacturers.
                            </p>
                            <p>
                                <span className="text-[#403D39] dark:text-[#bf0603] font-extrabold mr-1">
                                    Competitive Pricing:
                                </span>
                                Enjoy competitive prices, frequent discounts, and special offers
                                that help you stay up-to-date with the latest tech without breaking
                                the bank.
                            </p>
                            <p>
                                <span className="text-[#403D39] dark:text-[#bf0603] font-extrabold mr-1">
                                    Expert Customer Support:
                                </span>
                                Our knowledgeable and friendly customer support team is here to
                                assist you every step of the way.
                            </p>
                            <p>
                                <span className="text-[#403D39] dark:text-[#bf0603] font-extrabold mr-1">
                                    Fast and Secure Shipping:
                                </span>
                                Experience swift and secure delivery to your doorstep, ensuring you
                                get your hands on your new gadgets quickly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
