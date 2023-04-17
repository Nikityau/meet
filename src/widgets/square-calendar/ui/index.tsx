import React, {useEffect, useState} from 'react';
import cn from 'classnames'

import '../style/index.scss'
import {dataDays} from "../model/data";
import Weekday from "./weekday";

type SquareCalendarProps = {
    initDate: Date,
    chosenDate: Date,
    className?: string
}

type Month = {
    title: string,
    days: Date[]
}

const SquareCalendar = ({chosenDate, initDate, className}: SquareCalendarProps) => {

    const [month, setMonth] = useState<Month>(null)

    useEffect(() => {

    }, [])

    return (
        <div className={cn('square-calendar', className)}>
            <div className={'square-calendar__title'}>
                <span>{month.title}</span>
            </div>
            <div className={'square-calendar__calendar'}>
                <div className={'square-calendar__weekdays'}>
                    {
                        dataDays.map(day => (
                            <Weekday key={day.id} title={day.day}/>
                        ))
                    }
                </div>
                <div className={'square-calendar__days'}>

                </div>
            </div>
        </div>
    );
};

export default SquareCalendar;