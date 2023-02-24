export interface DateCalendar {
    weekday: number,
    date: number,
    month: number,
    timestamp: number
}

export interface Calendar {
    dateNow: DateCalendar,
    chosenDate: DateCalendar
}