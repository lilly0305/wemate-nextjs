import {create} from "zustand";

export interface DarkModeState {
  darkMode :boolean
  toggleDarkMode : () => void
}

export const useDarkMode = create<DarkModeState>((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({darkMode: !state.darkMode})),
}));