// Archive filter

import {EventRes} from "../../meet/helpers/hooks/use-today-events";
import {create} from "zustand";
import {immer} from "zustand/middleware/immer";
import {devtools} from "zustand/middleware";

interface Archive {
    data: EventRes[]
    setData: (data: EventRes[]) => void
}

export const useArchiveStore = create<Archive>()(devtools(immer((set) => ({
    data: null,
    setData: (data) => set(state => {
        state.data = data

        return state
    })
}))))