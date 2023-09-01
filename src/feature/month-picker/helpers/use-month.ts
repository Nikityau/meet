import {useContext, useEffect, useRef} from "react";
import {MonthPickerContext} from "../provider/context";
import {useFilterMeet} from "../../../local-states/filter-meet";
import {DateG} from "../../../shared/helpers/date-g";

export const useMonth = (month: number) => {
    const cntx = useContext(MonthPickerContext)
    const ref = useRef<HTMLDivElement>(null)

    const {filters, date, setFilter} = useFilterMeet()

    useEffect(() => {
        if(filters == null) {
            if(date.getMonth() == month)
                onSetMonth(month)
            return
        }
    }, [filters])

    const onSetMonth = (month: number) => {
        cntx.setMonth(month)
        cntx.setLeftOffset(computeOffset())
    }

    const onMonthClick = () => {
        onSetMonth(month)
        setFilter({
            type: "filterMeet/dates-add",
            payload: DateG.createDate(month)
        })
    }

    const computeOffset = () => {
        const curr = ref.current
        const o = curr.offsetLeft
        const w = curr.clientWidth / 2

        return o + w
    }

    return {
        cntx,
        ref,
        onMonthClick
    }
}