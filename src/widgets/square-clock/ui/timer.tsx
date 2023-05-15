import React, {useMemo, useState} from 'react';

type TimerProps = {
    time: string,
    onTimeSet: (time: string) => void
}

const Timer: React.FC<TimerProps> = ({time, onTimeSet}) => {
    const timeParsed = useMemo(() => {
        if (!time) {
            return {
                h: "00",
                m: "00"
            }
        }

        const parse = time.split(":")

        return {
            h: parse[0],
            m: parse[1]
        }
    }, [time])

    const hValidate = (h: number): string => {
        if(h == NaN) return "00"

        if(h > 12) {
            return '12'
        }
        if(h < 0) {
            return '00'
        }

        return h.toString()
    }
    const mValidate = (m: number): string => {
        if(m > 59) {
            return '59'
        }
        if(m < 0) {
            return '00'
        }

        return m.toString()
    }

    const onChangeTime = (type: 'h' | 'm', e: React.ChangeEvent<HTMLInputElement>) => {
        let time = e.target.value

        if (time.length > 2) {
            return
        }

        const intTime = time.length == 0 ? 0 : Number.parseInt(time)

        if(type == 'h') {
            time = hValidate(intTime)
        } else {
            time = mValidate(intTime)
        }

        if (type == 'h') {
            onTimeSet(`${time}:${timeParsed.m}`)
        } else {
            onTimeSet(`${timeParsed.h}:${time}`)
        }
    }

    const onChangeHours = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeTime('h', e)
    }
    const onMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeTime('m', e)
    }

    return (
        <div className={'square-clock__timer'}>
            <input type={'text'} value={timeParsed.h} onChange={onChangeHours}/>
            <div className={'square-clock__timer-delimeter'}>
                <div className={'square-clock__timer-delimeter-circle'}/>
                <div className={'square-clock__timer-delimeter-circle'}/>
            </div>
            <input type={'text'} value={timeParsed.m} onChange={onMinuteChange}/>
        </div>
    );
};

export default Timer;