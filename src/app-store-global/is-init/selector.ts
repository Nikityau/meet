import {Store} from "redux";

import {InitState} from "./type";

export const isAppInitSelector = (store: Store):boolean => {
    return (store['isInit'] as InitState).isAppInit
}