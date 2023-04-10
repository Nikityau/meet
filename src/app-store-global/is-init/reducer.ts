import produce from "immer";

import {InitState} from "./type";
import {initState} from "./state";
import {InitAction, InitTypes} from "./action";

export const reducer = (state: InitState = initState, action: InitAction) => {
    switch (action.type) {
        case InitTypes.APP_INIT:
            return produce(state, draft => {
                draft.isAppInit = true;

                return draft
            })
        case InitTypes.APP_NOT_INIT:
            return produce(state, draft => {
                draft.isAppInit = false

                return draft
            })
        default:
            return state
    }
}