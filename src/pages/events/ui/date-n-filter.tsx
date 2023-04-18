import React from 'react';

import {MonthDays} from "widgets/month-days";

import Filter from "features/filter";

const DateNFilter = () => {
    return (
        <div className={'events-page__date-n-filter'}>
            <MonthDays/>
            <Filter/>
        </div>
    );
};

export default DateNFilter;