import {UserState} from "./user-state";

export enum UserActionTypes {
    SET = 'user/set',
    REMOVE = 'user/remove'
}

export interface UserAction {
    type: UserActionTypes,
    payload: UserState | null
}

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