import {Store} from "redux";
import {UserState} from "./user-state";

export const userSelector = (store: Store): UserState => {
    return store['user']
}