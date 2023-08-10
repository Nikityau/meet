import React from 'react';

import TodayFilters from "./today-filters";
import TodayEventList from "./today-event-list";

const TodayEvent = () => {
    return (
        <div className={'today-event'}>
            <div className={'today-event__title'}>
                <span>Сегодня</span>
            </div>
            <TodayFilters/>
            <TodayEventList/>
        </div>
    );
};

export default TodayEvent;