import {create} from "zustand";
import {immer} from "zustand/middleware/immer";
import {devtools} from "zustand/middleware";

interface FBarStore {
    isMouseIn: boolean,
    isOpen: boolean,
    setIsOpen: (is: boolean) => void,
    setMousePos: (isIn: boolean) => void,
}

export const useFilterBarStore = create<FBarStore>()(devtools(immer((set) => ({
    isMouseIn: false,
    isOpen: false,
    setMousePos: (isIn: boolean) => set(state => {
        state.isMouseIn = isIn
    }),
    setIsOpen: (is: boolean) =>  set(state => {
        state.isOpen = is
    }),
}))))