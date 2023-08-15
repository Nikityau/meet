import React from 'react';
import MonthPicker from "../../feature/month-picker";
import DatePicker from "../../feature/date-picker";
import MonthList from "../../feature/month-picker/ui/month-list";
import MonthPointer from "../../feature/month-picker/ui/month-pointer";

import './style/index.scss'

const HorCalendar = () => {
    return (
        <div className={'hor-calendar'}>
            <div className={'hor-calendar__container app-container'}>
                <MonthPicker current={0} onMonthChange={() => {
                    console.log('change')
                }}>
                    <div className={'month-picker'}>
                        <MonthList/>
                        <MonthPointer/>
                    </div>
                </MonthPicker>
                <DatePicker
                    month={0}
                />
            </div>
        </div>
    );
};

export default HorCalendar;