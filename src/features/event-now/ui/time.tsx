import React from 'react';

type TimeProps = {
    time: string
}

const Time = ({time}:TimeProps) => {
    return (
        <div className={'events-now__time'}>
            <span>{time}</span>
        </div>
    );
};

export default Time;