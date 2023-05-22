import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://parseapi.back4app.com/classes/",
	headers: {
		"X-Parse-Application-Id": "BcmhNGw7L1ytCbQo2KBeKOHfPsq3Koq1K3HhsU3U",
		"X-Parse-REST-API-Key": "Yv06QbNIIuT9qbwHDiposCkzh2SHD2VA6RlCtZgg",
	},
});

export default axiosInstance;
