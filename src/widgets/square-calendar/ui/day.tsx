import React from 'react';
import cn from 'classnames'

type DayProps = {
    date: number
    isCurrent: boolean
    isHide: boolean
}

const Day = ({isCurrent, date, isHide}:DayProps) => {
    return (
        <div className={cn(
            'square-calendar__day',
            {
                'square-calendar__day_hide': isHide,
                'square-calendar__day_current': isCurrent
            }
            )}>
            <span>{date}</span>
        </div>
    );
};

export default Day;