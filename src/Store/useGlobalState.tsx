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

    routines: [],
    setRoutines: (newRoutines) => set({ routines: newRoutines }),

    exercises: [],
    setExercises: (newExercises) => set({ exercises: newExercises }),

    showChangePasswordModal: false,
    toggleChangePasswordModal: () => set((state) => ({ showChangePasswordModal: !state.showChangePasswordModal })),

    showRegisterPatientModal: false,
    toggleRegisterPatientModal: () => set((state) => ({ showRegisterPatientModal: !state.showRegisterPatientModal })),

    showAreUSureModal: false,
    toggleAreUSureModal: () => set((state) => ({ showAreUSureModal: !state.showAreUSureModal })),

    showDeleteAdminModal: false,
    toggleDeleteAdminModal: () => set((state) => ({ showDeleteAdminModal: !state.showDeleteAdminModal })),

    showAddRoutineModal: false,
    toggleAddRoutineModal: () => set((state) => ({ showAddRoutineModal: !state.showAddRoutineModal })),

    showAddExerciseToRoutineModal: false,
    toggleAddExerciseToRoutineModal: () => set((state) => ({ showAddExerciseToRoutineModal: !state.showAddExerciseToRoutineModal })),

    showEditRoutineModal: false,
    toggleEditRoutineModal: () => set((state) => ({ showEditRoutineModal: !state.showEditRoutineModal })),

    showDeleteRoutineModal: false,
    toggleDeleteRoutineModal: () => set((state) => ({ showDeleteRoutineModal: !state.showDeleteRoutineModal })),

    showDeleteExerciseModal: false,
    toggleDeleteExerciseModal: () => set((state) => ({ showDeleteExerciseModal: !state.showDeleteExerciseModal })),

    showEditExerciseModal: false,
    toggleEditExerciseModal: () => set((state) => ({ showEditExerciseModal: !state.showEditExerciseModal })),
  }
});