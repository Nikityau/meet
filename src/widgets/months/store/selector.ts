import {Store} from "redux";

import {DateObj, DateState} from "./type";

export const getChosenMonth = (store: Store): number => {
    return (store['date'] as DateState).chosenMonth
}

export const getFullChosenMonth = (store: Store):{
    month: number,
    year: number
} => {
    const date = (store['date'] as DateState)
    return {
        month: date.chosenMonth,
        year: date.currentDate.year
    }
}

export const getChosenDate = (store: Store): DateObj => {
    const date = (store['date'] as DateState)

    return date.chosenDate
}