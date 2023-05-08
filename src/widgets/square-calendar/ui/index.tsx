import React, {useCallback, useEffect, useMemo} from 'react';
import {nanoid} from "nanoid";
import cn from 'classnames'

import {dataDays} from "../model/data";

import Weekday from "./weekday";
import Day from "./day";

import ControlArrows from "./control-arrows";

import {useDate} from "../helpers/hooks/useDate";

import '../style/index.scss'

type SquareCalendarProps = {
    initDate: Date,
    chosenDates: Date[],
    className?: string,
    canChangeMonth: boolean,
    onDateClick?: (date: Date) => void
}

const SquareCalendar = React.memo((
    {
        chosenDates,
        initDate,
        canChangeMonth,
        className,
        onDateClick
    }: SquareCalendarProps) => {

    const {month, isDateBelongs, prevMonth, nextMonth} = useDate(initDate, chosenDates)

    return (
        <div className={cn('square-calendar', className)}>
            <div className={'square-calendar__title'}>
                <span>{month?.title}</span>
                {
                    canChangeMonth
                        ? <ControlArrows
                            next={nextMonth}
                            prev={prevMonth}
                        />
                        : null
                }
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
                                isCurrent={isDateBelongs(day, chosenDates)}
                                isHide={day.getFullYear() == 2000}
                                onClick={() => {
                                    onDateClick?.(day)
                                }}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
})

export default SquareCalendar;