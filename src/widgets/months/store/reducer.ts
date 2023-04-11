import produce from "immer";

import {DateState} from "./type";
import {dataState} from "./state";
import {DateAction, DateActionTypes} from "./action";

export const reducer = (state: DateState = dataState, action: DateAction) => {
    switch (action.type) {
        case DateActionTypes.CHOOSE_DATE:
            return produce(state, draft => {
                draft.chosenDate = action.payload

                return draft
            })
        case DateActionTypes.CHOOSE_MONTH:
            return produce(state, draft => {
                draft.chosenMonth = action.payload

                return draft
            })
        default:
            return state
    }
}