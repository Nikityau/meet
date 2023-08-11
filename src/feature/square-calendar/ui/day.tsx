import React from 'react';
import cn from 'classnames'


type DayProps = {
    date: Date,
    isChosen: boolean
    onClick: (date: Date) => void
}

const Day = ({date, isChosen, onClick}: DayProps) => {
    return (
        <div className={
            cn(
                'square-calendar__day',
                date['invisible'] ? 'square-calendar__day_hide' : '',
                isChosen ? 'square-calendar__day_chosen' : ''
            )
        }
             onClick={() => {
                 onClick(date)
             }}>
            <span>{date.getDate()}</span>
        </div>
    );
};

export default Day;