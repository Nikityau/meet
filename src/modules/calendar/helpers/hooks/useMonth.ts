import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getDaysInMonth} from 'date-fns'

import {getMonth} from "../../store/selector/getMonth";
import {getYear} from "../../store/selector/getYear";
import {nanoid} from "nanoid";

interface DateOfMoth {
    id: string,
    date: number,
    month: number,
    day: number
}

export const useMonth = () => {
    const [dates, setDates] = useState<DateOfMoth[]>([])

    const month = useSelector(getMonth)
    const year = useSelector(getYear)

    useEffect(() => {
        computeDatesOfMonth(month)
    }, [month])

    const computeDatesOfMonth = (month: number) => {
        const days = getDaysInMonth(new Date(year, month))
        const list = createDatesList(days)
        setDates(list)
    }

    const createDatesList = (dateCount: number): DateOfMoth[] => {
        const datesOfMonth:DateOfMoth[] = []

        const dateTemp = new Date(year, month)

        for(let i = 0; i < dateCount; ++i) {
            dateTemp.setDate(i + 1)

            datesOfMonth.push({
                id: nanoid(),
                date: i + 1,
                month: month,
                day: dateTemp.getDay()
            })
        }

        return datesOfMonth
    }

    return dates
}