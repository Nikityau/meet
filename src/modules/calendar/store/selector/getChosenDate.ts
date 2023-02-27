import {Store} from "redux";

import {Calendar} from "../interface/calendar.inteface";

export const getChosenDate = (store: Store) => {
    return (store['calendar'] as Calendar).chosenDate
}