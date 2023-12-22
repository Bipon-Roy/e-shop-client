import axios from "axios";

const axiosUrl = axios.create({
    baseURL: "https://brand-shop-server-sepia.vercel.app",
});

const useAxiosUrl = () => {
    return axiosUrl;
};

export default useAxiosUrl;
