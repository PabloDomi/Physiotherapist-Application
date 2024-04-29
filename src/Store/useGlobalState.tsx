import { create } from "zustand";
import { CustomStatsData, GlobalState, UserAdmin } from "../utils/types";

export const useGlobalState = create<GlobalState>((set) => {
  return {
    view: '',
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : null,
    setUser: (newUser: UserAdmin) => {
      localStorage.setItem('user', JSON.stringify(newUser))
      set({ user: newUser })
    },
    changeView: (newView: string) => set({ view: newView }),
    customStatsData: undefined,
    changeCustomStatsData: (newData: CustomStatsData) => set({ customStatsData: newData }),
    setCustomStatsDataUndefined: () => set({ customStatsData: undefined }),
    theme: localStorage.getItem('theme') || 'dark',
    toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
    showModal: false,
    toggleModal: () => set((state) => ({ showModal: !state.showModal }))
  }
});