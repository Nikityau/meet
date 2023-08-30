import {UserState} from "./user-state";
import {ReduxAction} from "../default/redux-action";

export enum UserActionTypes {
    SET = 'user/set',
    REMOVE = 'user/remove'
}

export interface UserAction extends ReduxAction<UserActionTypes, UserState | null> {}

export const setUser = (user: UserState): UserAction => {
    return {
        type: UserActionTypes.SET,
        payload: user
    }
}

export const removeUser = (): UserAction => {
    return {
        type: UserActionTypes.REMOVE,
        payload: null
    }
}