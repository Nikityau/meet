import React from 'react';

import Months from "./components/months/months";
import Dates from "./components/dates/dates";

import './style/calendar.scss'

const Calendar = () => {
    return (
        <div className={'calendar'}>
            <Months/>
            <Dates/>
        </div>
    );
};

export default Calendar;