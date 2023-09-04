import {create} from "zustand";
import {immer} from "zustand/middleware/immer";
import {devtools} from "zustand/middleware";

import {FilterFabric} from "../../../shared/helpers/fabric/filter-fabric";

interface FBarStore {
    isMouseIn: boolean,
    isOpen: boolean,
    setIsOpen: (is: boolean) => void,
    setMousePos: (isIn: boolean) => void,
}

export const useFilterBarState = create<FBarStore>()(devtools(immer((set) => ({
    isMouseIn: false,
    isOpen: false,
    setMousePos: (isIn: boolean) => set(state => {
        state.isMouseIn = isIn
    }),
    setIsOpen: (is: boolean) =>  set(state => {
        state.isOpen = is
    }),
}))))

export const useFilterBarStore = new FilterFabric().create()