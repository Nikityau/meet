import React from 'react';
import {weekdays} from "../data/date";
import Day from "./day";

type DatesProps = {
    dates: Date[],
    chosenDates: Date[],
    onDateClick: (date: Date) => void
}

const Dates = ({dates, chosenDates, onDateClick}: DatesProps) => {

    const isChosen = (date: Date): boolean => {
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
        <div className={'square-calendar__dates'}>
            <div className={'square-calendar__dates-container'}>
                <div className={'square-calendar__weekdays'}>
                    {
                        weekdays.map(d => (
                            <div className={'square-calendar__weekday'} key={d.id}>
                                <span>{d.day}</span>
                            </div>
                        ))
                    }
                </div>
                <div className={'square-calendar__days'}>
                    {
                        dates.map(d => (
                            <Day
                                key={d['uid']}
                                date={d}
                                isChosen={isChosen(d)}
                                onClick={onDateClick}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Dates;