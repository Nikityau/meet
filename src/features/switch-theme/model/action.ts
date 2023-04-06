import {ThemeAction, ThemeActionTypes} from "./type";

export const toggleThemeAction = (): ThemeAction => {
    return {
        type: ThemeActionTypes.SWITCH_COLOR,
        payload: null
    }
}