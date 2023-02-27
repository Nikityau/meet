import React from 'react';

import {useMonth} from "../../helpers/hooks/useMonth";

import DateComponent from "../date/dateComponent";

import './style/dates.scss'

const Dates = () => {

    const dates = useMonth()

    return (
        <div className={'dates'}>
            <div className={'dates__container'}>
                {
                    dates.map(el => (
                        <DateComponent
                            key={el.id}
                            date={el.date}
                            month={el.month}
                            day={el.day}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Dates;