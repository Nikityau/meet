import {Store} from "redux";
import {ThemeState} from "./theme-state";

export const themeSelector = (store: Store): ThemeState => {
    return store['theme']
}