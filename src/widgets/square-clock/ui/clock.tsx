import React, {useEffect, useMemo, useRef, useState} from 'react';
import TimeNum from "./time-num";
import {v4} from "uuid";
import TimeArrow from "./time-arrow";

type ClockProps = {
    time: string,
    onClockClick: (h: string) => void
}

const numbers = Array.from({length: 12})

const Clock: React.FC<ClockProps> = ({time,onClockClick}) => {

    const circle = useRef<HTMLDivElement>()

    const computeAngle = (type: 'x' | 'y', num: number) => {
        if(!circle.current) return

        const widthDecrease = 35

        const width = circle.current.clientWidth - widthDecrease

        const center = width / 2

        const radius = width / 2

        let coord = 0

        const degrees = - num * 30 * Math.PI / 180 + 3.15

        if(type == 'x')
            coord = center + widthDecrease / 2 + radius * Math.cos(degrees)
        else
            coord = center + widthDecrease / 2 + radius * Math.sin(degrees)

        return coord
    }

    const onTimeClick = (time: number) => {
        if(time < 10) {
            onClockClick(`0${time}`)
        } else {
            onClockClick(time.toString())
        }
    }

    return (
        <div className={'square-clock__clock'}>
            <div className={'square-clock__clock-face'}
                ref={circle}
            >
                {
                    numbers.map((t, i) => (
                        <TimeNum
                            x={computeAngle('x',i + 1)}
                            y={computeAngle('y', i + 1)}
                            num={i + 1}
                            key={v4()}
                            onTimeClick={onTimeClick}
                        />
                    ))
                }
                <TimeArrow time={time}/>
                <div className={'square-clock__clock-center'}></div>
            </div>
        </div>
    );
};

export default Clock;