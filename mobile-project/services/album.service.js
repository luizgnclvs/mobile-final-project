import axiosInstance from "./api.instance";

export const getAlbums = async () => axiosInstance.get("albums").then(res => res.data);

export const getAlbumById = async (id) => axiosInstance.get(`albums?id=${id}`).then(res => res.data);

export const createAlbum = async newAlbum =>
	axiosInstance.post("albums", newAlbum)
		.then(res => res.data)
		.catch(error => console.log(error.response.data));

