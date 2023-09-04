import React, {useContext} from 'react';
import {weekdays} from "../data/date";
import Day from "./day";
import {SqCalendarContext} from "../provider/sq-context";


const Dates = () => {

    const cntx = useContext(SqCalendarContext)

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
                        cntx.state.dates.map(d => (
                            <Day
                                key={d['uid']}
                                date={d}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Dates;