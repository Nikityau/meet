import {SideBarAction, SideBarActionTypes} from "./type";

export const toggleSideBarState = (): SideBarAction => {
    return {
        type: SideBarActionTypes.TOGGLE
    }
}