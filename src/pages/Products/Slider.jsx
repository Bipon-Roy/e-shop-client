// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
    return (
        <div>
            <Swiper
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <img src="https://i.ibb.co/hVksPdS/Advertising.jpg" alt="SalePoster" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="https://i.ibb.co/zrBC8Gt/Advertising-2.jpg" alt="SalePoster" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="https://i.ibb.co/kczkzJS/Ad-3.jpg" alt="SalePoster" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
