import React from 'react';

import {useMonth} from "../helpers/hooks/useMonth";
import Date from "./date";

import '../style/index.scss'

const Calendar = () => {

    const {month} = useMonth()

    return (
        <div className={'calendar'}>
            {
                month.map(el => (
                    <Date
                        key={el.valueOf()}
                        date={el}
                    />
                ))
            }
        </div>
    );
};

export default Calendar;