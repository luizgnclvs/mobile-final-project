import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from '@react-native-async-storage/async-storage';

const albumReleaseYearStore = create(persist((set) => ({
	year: 0,
	setYear: (year) => set({ year }),
}), {
	name: "album-release-year-store",
	storage: createJSONStorage(() => AsyncStorage),
}));

export default albumReleaseYearStore;
