import {Action} from "redux";

export enum UserActionTypes {
    LOG_IN = 'user/login',
    LOG_OUT = 'user/logout'
}

export interface UserAction extends Action {
    type: UserActionTypes,
    payload: any
}

export const userLogin = (): UserAction => {
    return {
        type: UserActionTypes.LOG_IN,
        payload: null
    }
}
export const userLogOut = (): UserAction => {
    return {
        type: UserActionTypes.LOG_OUT,
        payload: null
    }
}