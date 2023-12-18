import About from "../About/About";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import NewsLetter from "../NewsLetter/NewsLetter";
import AllProducts from "../Products/AllProducts";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Brands />
            <AllProducts />
            <NewsLetter />
            <Testimonial />
        </div>
    );
};

export default Home;
