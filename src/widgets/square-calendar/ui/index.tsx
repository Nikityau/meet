import React, {useEffect, useState} from 'react';
import cn from 'classnames'

import {dataDays} from "../model/data";

import Weekday from "./weekday";
import {nanoid} from "nanoid";
import {eachDayOfInterval} from "date-fns";
import Day from "./day";

import '../style/index.scss'

type SquareCalendarProps = {
    initDate: Date,
    chosenDate: Date,
    className?: string
}

type Month = {
    title: string,
    days: Date[]
}

const SquareCalendar = React.memo(({chosenDate, initDate, className}: SquareCalendarProps) => {

    const [month, setMonth] = useState<Month>(null)

    useEffect(() => {
        createCalendar()
    }, [])

    const getMonthByNum = (month: number): string => {
        switch (month) {
            case 0: return 'январь'
            case 1: return 'февраль'
            case 2: return 'март'
            case 3: return 'апрель'
            case 4: return 'май'
            case 5: return 'июнь'
            case 6: return 'июль'
            case 7: return 'август'
            case 8: return 'сентябрь'
            case 9: return 'октябрь'
            case 10: return 'ноябрь'
            case 11: return 'декабрь'
        }
    }

    const createCalendar = () => {
        const dates = eachDayOfInterval({
            start: new Date(initDate.getFullYear(), initDate.getMonth(), 1),
            end: new Date(initDate.getFullYear(), initDate.getMonth() + 1, 0)
        })

        const title = `${getMonthByNum(initDate.getMonth())} ${initDate.getFullYear()}`

        if(dates[0].getDay() == 1) {
            setMonth({
                title: title,
                days: dates
            })

            return
        }

        const diff = dates[0].getDay() - 1
        const datePlug = new Date(2000, 1, 1)
        for(let i = 0; i < diff; ++i) {
            dates.unshift(datePlug)
        }

        setMonth({
            title: title,
            days: dates
        })
    }

    const isDatesCompare = (d1: Date, d2: Date) => {
        return d1.toDateString() == d2.toDateString()
    }

    return (
        <div className={cn('square-calendar', className)}>
            <div className={'square-calendar__title'}>
                <span>{month?.title}</span>
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
                    {
                        month?.days.map(day => (
                            <Day
                                key={nanoid()}
                                date={day.getDate()}
                                isCurrent={isDatesCompare(day, chosenDate)}
                                isHide={day.getFullYear() == 2000}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
})

export default SquareCalendar;