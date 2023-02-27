import {Store} from "redux";
import {Calendar} from "../interface/calendar.inteface";

export const getMonth = (store: Store): number => {
    return (store['calendar'] as Calendar).chosenMonth
}