import produce from "immer";

import {UserAction, UserActionTypes} from "../action/user.action";

const userState = {
    isAuth: true
}

export  const userReducer = (state = userState, action: UserAction) => {
    switch (action.type) {
        case UserActionTypes.LOG_IN:
            return produce(state, draft => {
                draft.isAuth = true

                return draft
            })
        case UserActionTypes.LOG_OUT:
            return produce(state, draft => {
                draft.isAuth = false

                return draft
            })
        default:
             return state
    }
}