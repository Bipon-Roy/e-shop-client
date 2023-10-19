import { FaStar } from "react-icons/fa6";
import { AiOutlineStar } from "react-icons/ai";
const Ratings = ({ ratings }) => {
    const ratingStar = Array.from({ length: 5 }, (element, index) => {
        let number = index;
        return <span key={index}>{ratings > number ? <FaStar /> : <AiOutlineStar />}</span>;
    });
    return <div className="text-yellow-500 flex gap-1 text-2xl">{ratingStar}</div>;
};

export default Ratings;
