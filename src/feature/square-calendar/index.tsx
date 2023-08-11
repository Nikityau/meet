import React, {useState} from 'react';

import Month from "./ui/month";
import {SqState} from "./react-reducer";
import {useSquareCalendar} from "./helpers/useSquareCalendar";
import Dates from "./ui/dates";

import './style/index.scss'

type SquareCalendarProps = {
    onDateChange: (state: SqState) => void
}

/*
* now: 11.08.2023
* current: 11.09.2023
* chosenDates: [
*
* ]
*
* */

const SqCalendarContext = React.createContext(null)

const SquareCalendar = ({onDateChange}: SquareCalendarProps) => {
    const {state, f} = useSquareCalendar({onChange: onDateChange})

    return (
        <SqCalendarContext.Provider value={{}}>
            <div className={'square-calendar'}>
                <Month
                    state={state.date}
                    onChangeMonth={f.onMonthChange}
                />
                <Dates
                    dates={state.dates}
                    chosenDates={state.chosenDate}
                    onDateClick={f.onDateClick}
                />
            </div>
        </SqCalendarContext.Provider>
    );
};

export default SquareCalendar;