import produce from "immer";

import {DateState} from "./init-state";
import {CreateDateActionTypes, CreateDateAction} from './type'

export const dateReducer = (state: DateState, action: CreateDateAction) => {
    switch (action.type) {
        case CreateDateActionTypes.ADD_CHOSEN_DATE: {
            const newState = produce(state, draft => {
                draft.chosenDates.push(action.payload.value)

                return draft
            })

            action.payload.dispatch({
                time: newState.time,
                dates: newState.chosenDates
            })

            return newState
        }
        case CreateDateActionTypes.REMOVE_CHOSEN_DATE: {
            const newState = produce(state, draft => {
                draft.chosenDates = draft.chosenDates.filter(d => {
                    return d.toDateString() != action.payload.value.toDateString()
                })

                return draft
            })

            action.payload.dispatch({
                time: newState.time,
                dates: newState.chosenDates
            })

            return newState
        }
        case CreateDateActionTypes.SET_TIME: {
            const newState = produce(state, draft => {
                draft.time = action.payload.value

                return draft
            })

            action.payload.dispatch({
                time: newState.time,
                dates: newState.chosenDates
            })

            return newState
        }
        default:
            return state
    }
}