import axiosInstance from "./api.instance";

export const getAlbums = async () => await axiosInstance.get("albums").then(res => res.data);
