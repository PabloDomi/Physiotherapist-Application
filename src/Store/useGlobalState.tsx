import { create } from "zustand";
import { CustomStatsData, GlobalState, User, UserAdmin } from "../utils/types";

export const useGlobalState = create<GlobalState>((set) => {
  return {
    view: '',
    changeView: (newView: string) => set({ view: newView }),

    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : null,
    setUser: (newUser: UserAdmin) => {
      localStorage.setItem('user', JSON.stringify(newUser))
      set({ user: newUser })
    },

    patients: [],
    setPatients: (newPatients: User[]) => set({ patients: newPatients }),

    customStatsData: undefined,
    changeCustomStatsData: (newData: CustomStatsData) => set({ customStatsData: newData }),
    setCustomStatsDataUndefined: () => set({ customStatsData: undefined }),

    theme: localStorage.getItem('theme') || 'dark',
    toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),

    showChangePasswordModal: false,
    toggleChangePasswordModal: () => set((state) => ({ showChangePasswordModal: !state.showChangePasswordModal })),

    showRegisterPatientModal: false,
    toggleRegisterPatientModal: () => set((state) => ({ showRegisterPatientModal: !state.showRegisterPatientModal })),

    showAreUSureModal: false,
    toggleAreUSureModal: () => set((state) => ({ showAreUSureModal: !state.showAreUSureModal })),

    showDeleteAdminModal: false,
    toggleDeleteAdminModal: () => set((state) => ({ showDeleteAdminModal: !state.showDeleteAdminModal }))
  }
});