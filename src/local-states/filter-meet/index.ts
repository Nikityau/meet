import {create} from "zustand";
import {devtools} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";
import {FilterAction} from "./filter-action";

interface Filters {
    dates: Date[],
    tags: string[],
    location: string
}

interface FilterMeet {
    date: Date,
    filters: null | Filters,
    setFilter: (action: FilterAction) => any
}

export const useFilterMeet = create<FilterMeet>()(devtools(immer((set) => ({
    date: new Date(),
    filters: null,
    setFilter: (action: FilterAction) => set((state) => {
        if(state.filters == null) {
            state.filters = {
                dates: null,
                location: null,
                tags: null
            }
        }

        switch (action.type) {
            case "filterMeet/dates-add":
                if(state.filters.dates == null) {
                    state.filters.dates = []
                }

                const fD = action.payload as Date
                if(state.filters.dates.find(d => {
                    if(
                        d.getFullYear() == fD.getFullYear() &&
                        d.getMonth() == fD.getMonth() &&
                        d.getDate() == fD.getDate()
                    ) {
                        return true
                    }
                })) {
                    return
                }

                state.filters.dates.push(action.payload)
                return state
            case "filterMeet/dates-remove":
                const rD = action.payload as Date
                state.filters.dates = state.filters.dates.filter(d => {
                    if(
                        d.getFullYear() == rD.getFullYear() &&
                        d.getMonth() == rD.getMonth() &&
                        d.getDate() == rD.getDate()
                    ) {
                        return false
                    }

                    return true
                })

                if(state.filters?.dates.length == 0) {
                    state.filters.dates = null
                }

                if(state.filters.dates == null &&
                    state.filters.tags == null &&
                    state.filters.location == null
                )
                    state.filters = null

                return state
            case "filterMeet/tags-add":
                if(state.filters.tags == null) {
                    state.filters.tags = []
                }

                state.filters.tags.push(action.payload)
                return state
            case "filterMeet/tags-remove":
                const tag = action.payload as string
                state.filters.tags = state.filters.tags.filter(t => t != tag)

                if(state.filters.tags.length == 0) {
                    state.filters.tags = null
                }

                if(state.filters.dates == null &&
                    state.filters.tags == null &&
                    state.filters.location == null
                )
                    state.filters = null

                return state
            case "filterMeet/clear":
                state.filters = null

                return state
            default:
                return state
        }
    })
}))))