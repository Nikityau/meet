import React from 'react';
import MonthPicker from "../../feature/month-picker";
import DatePicker from "../../feature/date-picker";

import './style/index.scss'

const HorCalendar = () => {
    return (
        <div className={'hor-calendar'}>
            <div className={'hor-calendar__container app-container'}>
                <MonthPicker current={0} onMonthChange={() => {
                    console.log('change')
                }}/>
                <DatePicker
                    month={0}
                />
            </div>
        </div>
    );
};

export default HorCalendar;