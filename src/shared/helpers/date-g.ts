export class DateG {

    static weekdays = {
        ru: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
    }

    static isWeekend(day: number) {
        if(day == 0 || day == 6) return true

        return false
    }

    static createDate(month: number)
    static createDate(month: number, year?: number) {
        const date = new Date()

        date.setMonth(month)

        if(year) {
            date.setFullYear(year)
        }

        return date
    }

    static getMonthNameRu(num: number): string {
        const months = [
            "январь",
            "ферваль",
            "март",
            "апрель",
            "май",
            "июнь",
            "июль",
            "август",
            "сентябрь",
            "октябрь",
            "ноябрь",
            "декабрь"
        ]
        return months[num]
    }
}