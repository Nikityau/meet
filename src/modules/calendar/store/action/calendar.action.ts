import {Action} from "redux";

export enum CalendarActionTypes {
    CHANGE_MONTH = "calendar/changeMonth",
    CHANGE_CHOSEN ="calendar/changeChosen"
}

export interface CalendarAction extends Action {
    type: CalendarActionTypes,
    payload: any
}

export const chooseMonth = (month: number): CalendarAction => {
    return {
        type: CalendarActionTypes.CHANGE_MONTH,
        payload: month
    }
}

export const changeChosen = (month: number, date: number, day: number):CalendarAction => {
    return {
        type: CalendarActionTypes.CHANGE_CHOSEN,
        payload: {
            month,
            date,
            day
        }
    }
}