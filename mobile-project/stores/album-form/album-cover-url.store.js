import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from '@react-native-async-storage/async-storage';

const albumCoverURLStore = create(persist((set) => ({
	url: '',
	setURL: (url) => set({ url }),
}), {
	name: "album-cover-url-store",
	storage: createJSONStorage(() => AsyncStorage),
}));

export default albumCoverURLStore;
