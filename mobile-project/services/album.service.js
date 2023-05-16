import axiosInstance from "./api.instance";

export const getAlbuns = () => axiosInstance.get("Album").then(res => res.data);

