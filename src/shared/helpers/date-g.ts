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

    static getNormalStr = (date: Date): string => {
        date.setMonth(date.getMonth() + 1)

        let str = ""
        if(date.getDate() < 10) {
            str += '0'
        }

        str += date.getDate() + "."

        if(date.getMonth() < 10) {
            str += '0'
        }

        str += date.getMonth() + '.'
        str += date.getFullYear()

        return str
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

    static isCompare(d1: Date, d2: Date) {
        if (d1.getDate() == d2.getDate() &&
            d1.getMonth() == d2.getMonth() &&
            d1.getFullYear() == d2.getFullYear()
        )
            return true

        return false
    }
}