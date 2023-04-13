import React from 'react';

type DateProps = {
    date: string,
    month: string
}

const Date = ({date, month}:DateProps) => {
    return (
        <div className={'event-soon__date'}>
            <span>{date}</span>
            <span>{month}</span>
        </div>
    );
};

export default Date;