import { create } from "zustand";

interface AppState {
	count: number;
	increment: () => void;
	decrement: () => void;
	reset: () => void;
}

interface FilterScoreState {
	filterScore: number;
	setFilterScore: (filterScore: number) => void;
}

export const useStore = create<AppState>((set) => ({
	count: 0,
	increment: () => set((state) => ({ count: state.count + 1 })),
	decrement: () => set((state) => ({ count: state.count - 1 })),
	reset: () => set({ count: 0 }),
}));

export const useFilterScore = create<FilterScoreState>((set) => ({
	filterScore: 50,
	setFilterScore: (filterScore: number) => set({ filterScore }),
}));
