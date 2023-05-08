import {useCallback, useEffect, useMemo, useState} from "react";
import {eachDayOfInterval} from "date-fns";

import {getMonthByNum} from "shared/helpers/get-month-by-num";
import {isDatesCompare} from "shared/helpers/is-date-compare";

type Month = {
    title: string,
    days: Date[]
}

export const useDate = (initDate: Date, chosenDates: Date[]) => {
    const [month, setMonth] = useState<Date>(initDate)

    useEffect(() => {
        console.log(month)
    }, [month])

    const monthMemo = useMemo<Month>(() => {
        const dates = eachDayOfInterval({
            start: new Date(month.getFullYear(), month.getMonth(), 1),
            end: new Date(month.getFullYear(), month.getMonth() + 1, 0)
        })

        const title = `${getMonthByNum(month.getMonth())} ${month.getFullYear()}`

        if (dates[0].getDay() == 1) {
            return {
                title: title,
                days: dates
            }
        }

        const diff = Math.abs(dates[0].getDay() - 1)
        const datePlug = new Date(2000, 1, 1)
        for (let i = 0; i < diff; ++i) {
            dates.unshift(datePlug)
        }

        return {
            title: title,
            days: dates
        }
    }, [month])

    const isDateBelongs = useCallback((d: Date, dates: Date[]) => {
        for (let di in dates) {
            if (isDatesCompare(d, dates[di])) {
                return true
            }
        }

        return false
    }, [chosenDates])

    const nextMonth = useCallback(() => {
        setMonth(prev => {
            const newDate = new Date(prev.getFullYear(), prev.getMonth() + 1, 1)

            return newDate
        })
    }, [])
    const prevMonth = useCallback(() => {
        setMonth(prev => {
            const newDate = new Date(prev.getFullYear(), prev.getMonth() - 1, 1)

            return newDate
        })
    }, [])

    return {
        month: monthMemo,
        isDateBelongs,
        nextMonth,
        prevMonth
    }
}