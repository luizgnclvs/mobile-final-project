import axiosInstance from "./api.instance";

export const getAlbums = () => axiosInstance.get("albums").then(res => res.data);
