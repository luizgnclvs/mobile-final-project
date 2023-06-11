import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from '@react-native-async-storage/async-storage';
	
const useAlbumFormStore = create(persist((set) => ({
	name: "",
	artist: "",
	coverURL: "",
	releaseYear: "",
	setName: (newName) => set({ name: newName }),
	setArtist: (newArtist) => set({ artist: newArtist }),
	setCoverURL: (newURL) => set({ coverURL: newURL }),
	setReleaseYear: (newYear) => set({ releaseYear: newYear })
}), {
	name: "album-form-store",
	storage: createJSONStorage(() => AsyncStorage),
}));

export default useAlbumFormStore;