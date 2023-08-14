import React, {useContext, useRef} from 'react';
import cn from 'classnames'

import {DateG} from "../../../shared/helpers/date-g";
import {MonthPickerContext} from "../index";

type MonthProps = {
    month: number
}

const Month = ({month}:MonthProps) => {

    const cntx = useContext(MonthPickerContext)
    const ref = useRef<HTMLDivElement>(null)

    const onMonthClick = () => {
        cntx.setMonth(month)
        cntx.setLeftOffset(computeOffset())
    }

    const computeOffset = () => {
        const curr = ref.current
        const o = curr.offsetLeft
        const w = curr.clientWidth / 2

        return o + w
    }

    return (
        <div className={cn(
            'month-picker__month',
            cntx.month == month
                ? 'month-picker__month_current'
                : ''
        )}
            onClick={onMonthClick}
             ref={ref}
        >
            <span>{DateG.getMonthNameRu(month)}</span>
        </div>
    );
};

export default Month;