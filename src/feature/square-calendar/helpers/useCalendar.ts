import {useMemo} from "react";
import {v4} from "uuid";
import eachDayOfInterval from 'date-fns/eachDayOfInterval'

export const useCalendar = (date: Date) => {
    const dates = useMemo(() => {
        const ds = eachDayOfInterval({
            start: new Date(date.getFullYear(), date.getMonth(), 1),
            end: new Date(date.getFullYear(), date.getMonth() + 1, 0)
        }).map(d => {
            d['uid'] = v4()

            return d
        })

        if (ds[0].getDay() == 1) {
            return ds
        }

        const diff = ds[0].getDay() == 0 ? 6 : Math.abs(ds[0].getDay() - 1)
        for (let i = 0; i < diff; ++i) {
            const datePlug = new Date(2000, 1, 1)
            datePlug['invisible'] = true
            datePlug['uid'] = v4()
            ds.unshift(datePlug)
        }

        return ds
    }, [date])

    return dates
}