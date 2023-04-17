import React from 'react';

type DayProps = {
    date: number,
    isCurrent: boolean
}

const Day = ({isCurrent, date}:DayProps) => {
    return (
        <div className={'square-calendar__day'}>

        </div>
    );
};

export default Day;