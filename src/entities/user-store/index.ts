import produce from "immer";
import {userState, UserState} from "./user-state";
import {UserAction, UserActionTypes} from "./user-action";

export const userReducer = (state: UserState = userState, action: UserAction) => {
    switch (action.type) {
        case UserActionTypes.SET:
            return produce(state, draft => {
                draft = action.payload

                return draft
            })
        case UserActionTypes.REMOVE:
            return produce(state, draft => null)
        default:
            return state
    }
}