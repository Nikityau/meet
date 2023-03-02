import {create} from "zustand";
import {dataEvents} from "../data/data-events";

interface Test {
    data: any,
    categoryFilter: string,
}

export const useEventToday = create<Test>((set) => ({
    data: dataEvents,
    categoryFilter: ''
}))