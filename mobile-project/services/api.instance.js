import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://services-final.onrender.com/",
	headers: {
		"Content-Type": "application/json",
	}
});

export default axiosInstance;
