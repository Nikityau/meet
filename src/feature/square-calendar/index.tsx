import React, {PropsWithChildren} from 'react';

import Month from "./ui/month";
import {SqState} from "./react-reducer";
import Dates from "./ui/dates";
import SqContextProvider from "./provider/sq-context";

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


const SquareCalendar = ({onDateChange, children}: SquareCalendarProps & PropsWithChildren) => {
    return (
        <SqContextProvider onDateChange={onDateChange}>
            <div className={'square-calendar'}>
                <Month/>
                <Dates/>
            </div>
        </SqContextProvider>
    );
};

export default SquareCalendar;