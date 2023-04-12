import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {eachDayOfInterval} from 'date-fns'

import {getFullChosenMonth} from "../../../months";

export const useMonth = () => {
    const [month, setMonth] = useState<Date[]>([])
    const date = useSelector(getFullChosenMonth)

    useEffect(() => {
        computeDaysInMonth()
    }, [date])

    const computeDaysInMonth = () => {
        const days = eachDayOfInterval({
            start: new Date(date.year, date.month, 1),
            end: new Date(date.year, date.month + 1, 0)
        })

        setMonth(days)
    }

    return {
        month
    }
}