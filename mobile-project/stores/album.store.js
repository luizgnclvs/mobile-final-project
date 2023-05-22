import { create } from "zustand";

const useAlbumStore = create((set) => ({
	albums: null,
	setAlbums: (albums) => set({ albums: albums }),
}));

export default useAlbumStore;
