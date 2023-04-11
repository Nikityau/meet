import {DateState} from "./type";


const dateNow = new Date()

export const dataState: DateState = {
    currentDate: {
        date: dateNow.getDate(),
        month: dateNow.getMonth(),
        year: dateNow.getFullYear(),
        fullDate: dateNow.valueOf()
    },
    chosenDate: dateNow.getDate(),
    chosenMonth: dateNow.getMonth(),
}