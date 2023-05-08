import React, {useEffect, useMemo, useRef, useState} from 'react';
import TimeNum from "./time-num";
import {v4} from "uuid";

type ClockProps = {
    time: string
}

const numbers = Array.from({length: 12})

const Clock: React.FC<ClockProps> = ({time}) => {

    const circle = useRef<HTMLDivElement>()
    const [plug, setPlug] = useState('')

    useEffect(() => {
        setPlug('ok')
    }, [circle])

    const computeXAngle = (num: number) => {
        if(!circle.current) return

        const width = circle.current.clientWidth

        const centerX = width - width / 2
        const radius = width / 2

        return Math.round(centerX + radius * Math.cos(num * 30) + 20)
    }

    const computeYAngle = (num: number) => {
        if(!circle.current) return

        const height = circle.current.clientWidth

        const centerY = height - height / 2
        const radius = height / 2

        return Math.round(centerY + radius * Math.sin(num * 30) + 20)
    }

    return (
        <div className={'square-clock__clock'}>
            <div className={'square-clock__clock-face'}
                ref={circle}
            >
                {
                    numbers.map((t, i) => (
                        <TimeNum
                            x={computeXAngle(i + 1)}
                            y={computeYAngle(i + 1)}
                            num={i + 1}
                            key={v4()}
                        />
                    ))
                }
                <div className={'square-clock__clock-center'}></div>
            </div>
        </div>
    );
};

export default Clock;