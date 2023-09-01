import {useCalendar} from "../../../../shared/helpers/hooks/useCalendar";
import {DateG} from "../../../../shared/helpers/date-g";
import {useFilterMeet} from "../../../../local-states/filter-meet";
import {useEffect} from "react";

export const useDatePicker = () => {
    const {date, filters} = useFilterMeet()

    useEffect(() => {
        console.log(filters)
    }, [filters])

    const dates = useCalendar(
        DateG.createDate((() => {
            if(filters && filters.dates != null) {
                if(filters.dates.length == 1) {
                    return filters.dates[0].getMonth()
                }
            }

            return date.getMonth()
        })())
        , false)

    return {
        dates
    }
}