import {Store} from "redux";

import {DateState} from "./type";

export const getChosenMonth = (store: Store): number => {
    return (store['date'] as DateState).chosenMonth
}
export const getChosenDate = (store: Store): {
    month: number,
    date: number
} => {
    const date = (store['date'] as DateState)
    return {
        date: date.chosenDate,
        month: date.chosenMonth
    }
}