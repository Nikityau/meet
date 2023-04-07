import {Store} from "redux";

import {SideBar} from "./type";

export const getSideBarState = (store: Store):boolean => {
    return (store['sideBar'] as SideBar).isOpen
}