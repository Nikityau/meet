import {Calendar} from "../interface/calendar.inteface";

const calendarState: Calendar = (() => {
    const dateNow = new Date(Date.now())

    return {
        dateNow: {
            weekday: dateNow.getDay(),
            date: dateNow.getDate(),
            month: dateNow.getMonth(),
            timestamp: dateNow.valueOf()
        },
        chosenDate: {
            weekday: dateNow.getDay(),
            date: dateNow.getDate(),
            month: dateNow.getMonth(),
            timestamp: dateNow.valueOf()
        }
    }
})()

export const calendarReducer = (state: Calendar = calendarState, action) => {
    switch (action.type) {
        default:
            return state
    }
}