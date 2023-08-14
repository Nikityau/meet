import React from 'react';
import {v4} from "uuid";
import Month from "./month";

const months = Array.from({ length: 12 }, (_, i) => {
    _ = {}
    _['uid'] = v4()

    return _
})

const MonthList = () => {
    return (
        <div className={'month-picker__month-list'}>
            {
                months.map((el, i) => (
                    <Month
                        month={i}
                        key={el['uid']}
                    />
                ))
            }
        </div>
    );
};

export default MonthList;