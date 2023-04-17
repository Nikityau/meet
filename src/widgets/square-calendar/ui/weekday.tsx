import React from 'react';

type WeekdayProps = {
    title: string
}

const Weekday = ({title}:WeekdayProps) => {
    return (
        <div className={'square-calendar__weekday'}>
            <span>{title}</span>
        </div>
    );
};

export default Weekday;