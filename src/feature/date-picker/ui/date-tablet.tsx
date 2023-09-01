import React from 'react';
import cn from 'classnames'

import {DateG} from "../../../shared/helpers/date-g";
import {useFilterMeet} from "../../../local-states/filter-meet";

type DateTabletProps = {
    date: Date
}

const DateTablet = ({date}: DateTabletProps) => {

    const filter = useFilterMeet()

    const isCurrent = (): boolean => {
        return DateG.isCompare(date, filter.date)
    }

    const isChosen = (): boolean => {
        if(filter.filters && filter.filters.dates) {
            const dates = filter.filters.dates
            for(let d of dates) {
                if(DateG.isCompare(d, date)) {
                    return true
                }
            }
        }

        return false
    }

    const onClick = () => {
        filter.setFilter({
            type: "filterMeet/dates-add",
            payload: date
        })
    }

    return (
        <div className={cn(
            'date-picker__date-tablet',
            'date-tablet',
            DateG.isWeekend(date.getDay()) ? 'date-tablet_weekend' : '',
            isCurrent() ? 'date-tablet__current' : '',
            isChosen() ? 'date-tablet__chosen' : ''
        )} onClick={onClick}>
            <div className={'date-tablet__day'}>
                <span>{DateG.weekdays.ru[date.getDay()]}</span>
            </div>
            <div className={'date-tablet__date'}>
                <span>{date.getDate()}</span>
            </div>
        </div>
    );
};

export default DateTablet;