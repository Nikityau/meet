import React from 'react';

import Month from "./ui/month";
import {SqState} from "./react-reducer";
import {SqRetSt, useSquareCalendar} from "./helpers/useSquareCalendar";
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

export const SqCalendarContext = React.createContext<SqRetSt>(null)

const SquareCalendar = ({onDateChange}: SquareCalendarProps) => {
    const {state, f} = useSquareCalendar({onChange: onDateChange})

    return (
        <SqCalendarContext.Provider value={{
            state,
            f
        }}>
            <div className={'square-calendar'}>
                <Month/>
                <Dates/>
            </div>
        </SqCalendarContext.Provider>
    );
};

export default SquareCalendar;