import {Store} from "redux";
import {Calendar} from "../interface/calendar.inteface";

export const getYear = (store: Store) => {
    return (store['calendar'] as Calendar).dateNow.year
}