import React, {useState} from 'react';

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

    return (
        <div className={'square-clock'}>
            <Timer time={time}/>
            <Clock time={time}/>
        </div>
    );
};

export default SquareClock;