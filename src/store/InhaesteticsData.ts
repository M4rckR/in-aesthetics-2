import { create } from "zustand";

interface InhaesteticsData {
  isOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
}

export const useInhaesteticsData = create<InhaesteticsData>((set) => ({
  isOpen: false,
  openDialog: () => set({ isOpen: true }),
  closeDialog: () => set({ isOpen: false }),
}));