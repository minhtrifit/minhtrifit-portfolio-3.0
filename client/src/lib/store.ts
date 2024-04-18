import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface CategoryState {
  category: string;
  setCategory: (value: string) => void;
}

interface SearchState {
  searchValue: string;
  type: string;
  setSearchValue: (value: string, typeValue: string) => void;
}

export const useCategoryStore = create<CategoryState>()(
  devtools((set) => ({
    category: "",
    setCategory: (value: string) => set(() => ({ category: value })),
  }))
);

export const useSearchStore = create<SearchState>()(
  devtools((set) => ({
    searchValue: "",
    type: "",
    setSearchValue: (value: string, typeValue: string) =>
      set(() => ({ searchValue: value, type: typeValue })),
  }))
);
