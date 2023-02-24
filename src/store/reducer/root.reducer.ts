import {combineReducers} from "redux";

import {themeReducer} from "../../features/theme";
import {userReducer} from "../../features/user";
import {calendarReducer} from "../../modules/calendar";

export const rootReducer = combineReducers({
    theme: themeReducer,
    user: userReducer,
    calendar: calendarReducer
})