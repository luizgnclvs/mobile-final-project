import axiosInstance from "./api.instance";

export const getRatings = async () => axiosInstance.get("ratings").then(res => res.data);

export const createRating = async newRating =>
	axiosInstance.post("ratings", newRating)
		.then(res => res.data)
		.catch(error => console.log(error.response.data));
