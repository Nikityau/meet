import React, {useEffect, useState} from 'react';
import {nanoid} from "nanoid";

import {dataDays} from "../model/data";
import {eachDayOfInterval} from "date-fns";

const EventDate = () => {

    const [month, setMonth] = useState<Date[]>([])

    useEffect(() => {
        dateMonth()
    }, [])

    const dateMonth = () => {
        const dates = eachDayOfInterval({
            start: new Date(2023, 2, 1),
            end: new Date(2023, 3, 0)
        })

        if(dates[0].getDay() == 1) {
            setMonth(dates)

            return
        }

        const diff = dates[0].getDay() - 1
        const datePlug = new Date(2000, 1, 1)
        for(let i = 0; i < diff; ++i) {
            dates.unshift(datePlug)
        }

        setMonth(dates)
    }

    return (
        <div className={'event__event-date event-date'}>
            <div className={'event-date__title'}>
                <span>МАРТ 2023</span>
            </div>
            <div className={'event-date__calendar'}>
                <div className={'event-date__weekdays'}>
                    {
                        dataDays.map(d => (
                            <div key={d.id} className={'event-date__weekday'}>
                                <span>{d.day}</span>
                            </div>
                        ))
                    }
                </div>
                <div className={'event-date__days'}>
                    {
                        month.map(day => (
                            <div key={nanoid()} className={'event-date__day'}>
                                <span>{day.getFullYear() == 2000 ? '' : day.getDate()}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default EventDate;