import {Store} from "redux";

import {UserState} from "./type";

export const userAvatarSelector = (store: Store) => {
    return (store['user'] as UserState).avatar
}