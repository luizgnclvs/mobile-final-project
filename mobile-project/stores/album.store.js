import { create } from "zustand";

const useAlbumStore = create((set) => ({
	albums: [],
	setAlbums: (newAlbums) => set({ albums: newAlbums })
}));

export default useAlbumStore;
