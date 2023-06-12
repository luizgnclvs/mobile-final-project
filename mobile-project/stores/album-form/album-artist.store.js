import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from '@react-native-async-storage/async-storage';

const albumArtistStore = create(persist((set) => ({
	artist: '',
	setArtist: (artist) => set({ artist }),
}), {
	name: "album-artist-store",
	storage: createJSONStorage(() => AsyncStorage),
}));

export default albumArtistStore;
