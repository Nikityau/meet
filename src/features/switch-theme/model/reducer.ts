import produce from "immer";

import {ThemeAction, ThemeActionTypes, ThemeState} from "./type";

import {stateTheme} from "./state";

export const reducer = (state: ThemeState = stateTheme, action: ThemeAction) => {
    switch (action.type) {
        case ThemeActionTypes.SWITCH_COLOR:
            return produce(state, draft => {
                switch (draft.color) {
                    case 'DARK':
                        draft.color = 'LIGHT'
                        break
                    case 'LIGHT':
                        draft.color = 'DARK'
                        break
                }

                return draft
            })
        case ThemeActionTypes.CHANGE_TYPE:
            return state
        default:
            return state
    }
}