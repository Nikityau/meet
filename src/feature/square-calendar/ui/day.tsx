import React, {useContext, useState} from 'react';
import cn from 'classnames'
import {SqCalendarContext} from "../index";


type DayProps = {
    date: Date,
}

const Day = ({date}: DayProps) => {

    const cntx = useContext(SqCalendarContext)

    const isChosen = (date: Date): boolean => {
        const chosenDates = cntx.state.chosenDate

        for(let i = 0; i < chosenDates.length; ++i) {
            const d = chosenDates[i]

            if(
                d.getDate() == date.getDate() &&
                d.getMonth() == date.getMonth() &&
                d.getFullYear() == date.getFullYear()
            ) return true
        }

        return false
    }

    return (
        <div className={
            cn(
                'square-calendar__day',
                date['invisible'] ? 'square-calendar__day_hide' : '',
                isChosen(date)? 'square-calendar__day_chosen' : ''
            )
        }
             onClick={() => {
                 cntx.f.onDateClick(date)
             }}>
            <span>{date.getDate()}</span>
        </div>
    );
};

export default Day;