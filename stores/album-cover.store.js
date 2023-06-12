import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAlbumCoverStore = create(persist((set) => ({
	image: null,
	setImage: (image) => set({ image }),
}), {
	name: "album-cover-store",
	storage: createJSONStorage(() => AsyncStorage),
}));

export default useAlbumCoverStore;
