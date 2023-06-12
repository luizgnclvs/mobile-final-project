import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from '@react-native-async-storage/async-storage';

const albumNameStore = create(persist((set) => ({
	name: '',
	setName: (name) => set({ name }),
}), {
	name: "album-name-store",
	storage: createJSONStorage(() => AsyncStorage),
}));

export default albumNameStore;
