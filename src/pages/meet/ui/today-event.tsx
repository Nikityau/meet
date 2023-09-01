import React from 'react';

import TodayFilters from "./today-filters";
import TodayEventList from "./today-event-list";
import TdTitle from "./td-title";

const TodayEvent = () => {
    return (
        <div className={'today-event'}>
            <TdTitle/>
            <TodayFilters/>
            <TodayEventList/>
        </div>
    );
};

export default TodayEvent;