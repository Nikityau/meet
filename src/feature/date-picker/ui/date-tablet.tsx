import React from 'react';
import cn from 'classnames'

import {DateG} from "../../../shared/helpers/date-g";

type DateTabletProps = {
    date: Date
}

const DateTablet = ({date}: DateTabletProps) => {
    return (
        <div className={cn(
            'date-picker__date-tablet',
            'date-tablet',
            DateG.isWeekend(date.getDay()) ? 'date-tablet_weekend' : ''
        )}>
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