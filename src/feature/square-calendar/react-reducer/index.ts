import produce from "immer";

export interface SqState {
    dateNow: Date,
    chosenDate: Date,
    chosenDates: Date[]
}

export const sqState: SqState = {
    dateNow: new Date(),
    chosenDate: new Date(),
    chosenDates: []
}

export enum SqActionTypes {
    MONTH_NEXT = "sqCal/monthNext",
    MONTH_PREV = "sqCal/monthPrev",
    CHOSEN_ADD = "sqCal/chosenAdd",
    CHOSEN_REMOVE = "sqCal/chosenRemove",
    CLEAR = "sqCal/clear"
}

export type SqAction = {
    type: SqActionTypes,
    payload: any
}

export const sqReducer = (state: SqState, action: SqAction): SqState => {
    switch (action.type) {
        case SqActionTypes.MONTH_NEXT:
            return produce(state, (draft) => {
                draft.chosenDate = new Date(draft.chosenDate.getFullYear(), draft.chosenDate.getMonth() + 1, 1)

                return draft
            })
        case SqActionTypes.MONTH_PREV:
            return produce(state, (draft) => {
                draft.chosenDate = new Date(draft.chosenDate.getFullYear(), draft.chosenDate.getMonth() - 1, 1)

                return draft
            })
        case SqActionTypes.CHOSEN_ADD:
            return produce(state, (draft) => {
                draft.chosenDates.push(action.payload)

                return draft
            })
        case SqActionTypes.CHOSEN_REMOVE:
            return produce(state, (draft) => {
                const date = action.payload
                draft.chosenDates = draft.chosenDates.filter(d => {
                    if(
                        d.getDate() == date.getDate() &&
                        d.getMonth() == date.getMonth() &&
                        d.getFullYear() == date.getFullYear()
                    ) return false

                    return true
                })

                return draft
            })
        case SqActionTypes.CLEAR:
            return produce(state, draft => {
                state.chosenDates = []

                return draft
            })
        default:
            return state
    }
}