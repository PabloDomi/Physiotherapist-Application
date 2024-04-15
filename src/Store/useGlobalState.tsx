import { create } from "zustand";
import { GlobalState } from "../Utils/types";

export const useGlobalState = create<GlobalState>((set) => {
  return {
    view: '',
    user: null,
    changeView: (newView: string) => set({ view: newView }),
  }
});