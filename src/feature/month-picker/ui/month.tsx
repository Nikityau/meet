import React, {useEffect} from 'react';
import cn from 'classnames'

import {DateG} from "../../../shared/helpers/date-g";
import {useMonth} from "../helpers/use-month";

type MonthProps = {
    month: number
}

const Month = ({month}: MonthProps) => {

    const {onMonthClick, ref, cntx} = useMonth(month)


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