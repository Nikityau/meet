import produce from "immer";
import {isDate} from "date-fns";

import {DateState} from "./type";
import {dataState} from "./state";
import {DateAction, DateActionTypes} from "./action";


const isNumber = (value: number | Date): value is number => {
    return Number.isInteger(value)
}

const isDateObj = (v: number | Date): v is Date => {
    return isDate(v)
}

export const reducer = (state: DateState = dataState, action: DateAction) => {
    switch (action.type) {
        case DateActionTypes.CHOOSE_DATE:
            return produce(state, draft => {
                if (isDateObj(action.payload)) {
                    draft.chosenDate.date = action.payload.getDate()
                    draft.chosenDate.month = action.payload.getMonth()
                    draft.chosenDate.year = action.payload.getFullYear()
                    draft.chosenDate.fullDate = action.payload.valueOf()
                }


                return draft
            })
        case DateActionTypes.CHOOSE_MONTH:
            return produce(state, draft => {
                if (isNumber(action.payload)) {
                    draft.chosenMonth = action.payload
                }

                return draft
            })
        default:
            return state
    }
}