import { atom, useAtom } from "jotai";

export const categoryModalAtom = atom(false);

export const useCategoryModal = () => {
  return useAtom(categoryModalAtom);
};
