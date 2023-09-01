import {Store} from "redux";
import {TagState} from "./index";

export const tagsSelector = (store: Store): TagState[] => {
    return store['tags']
}