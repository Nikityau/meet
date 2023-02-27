export interface DateCalendar {
    day: number,
    month: number,
    year: number
    date: number,
    timestamp: number
}

export interface Calendar {
    dateNow: DateCalendar,
    chosenDate: DateCalendar,
    chosenMonth: number
}