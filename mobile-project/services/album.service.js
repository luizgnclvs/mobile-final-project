import axiosInstance from "./api.instance";

export const getAlbums = async () => axiosInstance.get("albums").then(res => albums = res.data);

export const createAlbum = async newAlbum =>
	axiosInstance.post("albums", newAlbum)
		.then(res => res.data)
		.catch(error => console.log(error.response.data));

