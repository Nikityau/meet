import {Action} from "redux";

export type UserState = {
    name: string,
    surname: string,
    birth: string,
    gender: 'Man' | 'Woman',
    avatar: string,
    type: 'User' | 'Moderator' | 'Admin'
    is_auth: boolean
} | null

export enum UserActionTypes {
    LOGOUT = 'user/logout',
    LOGIN = 'user/login'
}

export type UserAction = {
    type: UserActionTypes,
    payload?: any
} & Action