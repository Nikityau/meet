import React from 'react';

import {Calendar} from "widgets/date";
import Filter from "features/filter";

const DateNFilter = () => {
    return (
        <div className={'events-page__date-n-filter'}>
            <Calendar/>
            <Filter/>
        </div>
    );
};

export default DateNFilter;