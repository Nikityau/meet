import produce from "immer";

import {SideBar, SideBarAction, SideBarActionTypes} from "./type";
import {sideBarState} from "./state";

export const reducer = (state: SideBar = sideBarState, action: SideBarAction) => {
    switch (action.type) {
        case SideBarActionTypes.OPEN:
            return produce(state, draft => {
                draft.isOpen = true

                return draft
            })
        case SideBarActionTypes.CLOSE:
            return produce(state, draft => {
                draft.isOpen = false

                return draft
            })
        case SideBarActionTypes.TOGGLE:
            return produce(state, draft => {
                draft.isOpen = !draft.isOpen

                return draft
            })
        default:
            return state
    }
}