import axiosInstance from "./api.instance";

export const getAlbums = () => axiosInstance.get("Album").then(res => res.data);
