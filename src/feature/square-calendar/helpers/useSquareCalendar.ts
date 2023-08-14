import {useEffect, useReducer} from "react";

import {SqActionTypes, sqReducer, SqState, sqState} from "../react-reducer";
import {useCalendar} from "../../../shared/helpers/hooks/useCalendar";

type useSquareCalendarProps = {
    onChange: (state: SqState) => void
}

export type SqRetSt = {
    state: {
        date: Date,
        chosenDate: Date[],
        dates: Date[]
    },
    f: {
        onMonthChange: (change: 'up' | 'down') => void,
        onDateClick: (date: Date) => void
    }
}

export const useSquareCalendar = ({onChange}: useSquareCalendarProps): SqRetSt => {
    const [st, dis] = useReducer(sqReducer, sqState)

    const dates = useCalendar(st.chosenDate)

    useEffect(() => {
        onChange(st)
    }, [st])

    const onMonthChange = (change: 'up' | 'down') => {
        if (change == 'up') {
            dis({
                type: SqActionTypes.MONTH_NEXT,
                payload: null
            })

            return
        }

        dis({
            type: SqActionTypes.MONTH_PREV,
            payload: null
        })
    }

    const onDateClick = (date: Date) => {
        if (isChosenContain(date)) {
            dis({
                type: SqActionTypes.CHOSEN_REMOVE,
                payload: date
            })

            return
        }

        dis({
            type: SqActionTypes.CHOSEN_ADD,
            payload: date
        })
    }

    const isChosenContain = (date: Date): boolean => {
        for (let i = 0; i < st.chosenDates.length; ++i) {
            const d = st.chosenDates[i]
            if (
                d.getDate() == date.getDate() &&
                d.getMonth() == date.getMonth() &&
                d.getFullYear() == date.getFullYear()
            ) return true
        }

        return false
    }

    return {
        state: {
            date: st.chosenDate,
            chosenDate: st.chosenDates,
            dates,
        },
        f: {
            onMonthChange,
            onDateClick
        }
    }
}