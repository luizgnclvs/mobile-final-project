import axiosInstance from "./api.instance";

export const getAlbums = () => axiosInstance.get("albums").then(res => res.data);

export const createAlbum = newAlbum => axiosInstance.post("albums", newAlbum).then(res => res.data);
