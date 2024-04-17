import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface CategoryState {
  category: string;
  setCategory: (value: string) => void;
}

export const useCategoryStore = create<CategoryState>()(
  devtools((set) => ({
    category: "",
    setCategory: (value: string) => set(() => ({ category: value })),
  }))
);
