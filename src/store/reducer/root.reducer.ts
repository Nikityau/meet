import {combineReducers} from "redux";

import {themeReducer} from "../../features/theme";
import {userReducer} from "../../features/user";

export const rootReducer = combineReducers({
    theme: themeReducer,
    user: userReducer
})