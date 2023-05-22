import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://services-final.onrender.com/",
});

export default axiosInstance;
