import {UserAction, UserState} from "./type";

import {userState} from "./state";

export const reducer = (state: UserState = userState, action:UserAction) => {
    switch (action.type) {
        default:
            return state
    }
}