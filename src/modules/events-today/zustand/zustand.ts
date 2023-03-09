import produce from "immer";
import {create} from "zustand";

import {dataEvents} from "../data/data-events";

import {FilterObject} from "../../filter";

interface Test {
    data: any
    evTypeFilter: string | null,
    categoryFilter: string[] | null,
    changeEvTypeFilter: (filter: FilterObject) => any,
    changeCategoryFilter: (filter: FilterObject) => any,
    clearCategoryFilter: () => any
}

export const useEventToday = create<Test>((set, get) => ({
    data: dataEvents,
    evTypeFilter: null,
    categoryFilter: null,
    changeEvTypeFilter: (filter: FilterObject) => set(state => ({evTypeFilter: filter.filter})),
    changeCategoryFilter: (filter: FilterObject) => set(
        produce((state) => {
            if(state.categoryFilter == null) {
                state.categoryFilter = []
            }

            if(state.categoryFilter.find(el => el == filter.filter)) {
                return state
            }

            state.categoryFilter.push(filter.filter)

            return state
        })
    ),
    clearCategoryFilter: () => set(
        produce((state) => {
            state.categoryFilter = null

            return state
        })
    )
}))