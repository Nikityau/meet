import React from 'react';
import cn from 'classnames'

type DayProps = {
    date: number
    isCurrent: boolean
    isHide: boolean,
    onClick?: () => void
}

const Day = ({isCurrent, date, isHide, onClick}:DayProps) => {
    return (
        <div className={cn(
            'square-calendar__day',
            {
                'square-calendar__day_hide': isHide,
                'square-calendar__day_current': isCurrent
            }
            )}
            onClick={onClick}
        >
            <span>{date}</span>
        </div>
    );
};

export default Day;