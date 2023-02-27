import {Calendar} from "../interface/calendar.inteface";
import {CalendarAction, CalendarActionTypes} from "../action/calendar.action";
import produce from "immer";

const calendarState: Calendar = (() => {
    const dateNow = new Date(Date.now())

    return {
        dateNow: {
            day: dateNow.getDay(),
            month: dateNow.getMonth(),
            year: dateNow.getFullYear(),
            date: dateNow.getDate(),
            timestamp: dateNow.valueOf()
        },
        chosenDate: {
            day: dateNow.getDay(),
            month: dateNow.getMonth(),
            year: dateNow.getFullYear(),
            date: dateNow.getDate(),
            timestamp: dateNow.valueOf()
        },
        chosenMonth: dateNow.getMonth()
    }
})()

export const calendarReducer = (state = calendarState, action: CalendarAction) => {
    switch (action.type) {
        case CalendarActionTypes.CHANGE_CHOSEN:
            return produce(state, draft => {
                draft.chosenDate.month = action.payload.month
                draft.chosenDate.date = action.payload.date
                draft.chosenDate.day = action.payload.day

                return draft
            })
        case CalendarActionTypes.CHANGE_MONTH:
            return produce(state, draft => {
                draft.chosenMonth = action.payload

                return draft
            })
        default:
            return state
    }
}