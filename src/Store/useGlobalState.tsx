import { create } from "zustand";
import { CustomStatsData, GlobalState } from "../Utils/types";

export const useGlobalState = create<GlobalState>((set) => {
  return {
    view: '',
    user: null,
    changeView: (newView: string) => set({ view: newView }),
    customStatsData: undefined,
    changeCustomStatsData: (newData: CustomStatsData) => set({ customStatsData: newData }),
    setCustomStatsDataUndefined: () => set({ customStatsData: undefined })
  }
});