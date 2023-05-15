import React, {useEffect, useState} from 'react';

import Timer from "./timer";
import Clock from "./clock";

import '../style/index.scss'

type SquareClockProps = {
    time: string,
    onTimeClick: (time: string) => void
}

const SquareClock: React.FC<SquareClockProps> = (
    {
        time,
        onTimeClick
    }
) => {

    const onClockClick = (h: string) => {
        const m = time.split(':')[1]
        onTimeClick(`${h}:${m}`)
    }

    return (
        <div className={'square-clock'}>
            <Timer time={time} onTimeSet={onTimeClick}/>
            <Clock time={time} onClockClick={onClockClick}/>
        </div>
    );
};

export default SquareClock;