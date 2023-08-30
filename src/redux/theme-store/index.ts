import produce from "immer";
import {themeState, ThemeState} from "./theme-state";
import {ThemeAction, ThemeActionTypes} from "./theme-action";

export const themeReducer = (state: ThemeState = themeState, action: ThemeAction) => {
    switch (action.type) {
        case ThemeActionTypes.ALL:
            return produce(state, draft => draft)
        case ThemeActionTypes.MAIN:
            return produce(state, draft => draft)
        case ThemeActionTypes.ADDITIONAL:
            return produce(state, draft => draft)
        case ThemeActionTypes.SWITCH:
            return produce(state, draft => draft)
        default:
            return state
    }
}