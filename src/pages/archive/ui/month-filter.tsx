import React from 'react';

import Month from "./month";
import MonthFilterBtns from "./month-filter-btns";

const MonthFilter = () => {
    return (
        <div className={'month-filter'}>
            <Month/>
            <MonthFilterBtns/>
            <div className={'month-filter__underline'}></div>
        </div>
    );
};

export default MonthFilter;