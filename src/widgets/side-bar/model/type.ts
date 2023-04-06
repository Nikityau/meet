import {Action} from "redux";

export type SideBar = {
    isOpen: boolean
}


export enum SideBarActionTypes {
    OPEN = 'sideBar/open',
    CLOSE = 'sideBar/close',
    TOGGLE = 'sideBar/toggle',
}

export type SideBarAction = {
    type: SideBarActionTypes,
    payload?: any
} & Action