import React from 'react';

import SwipeEvents from "../../../entities/swipe-events";
import EventPreviewNow from "../../../entities/event-preview-now";
import {eventsTodayData} from "../data/events-data";

const TodayEvent = () => {
    return (
        <div className={'today-event'}>
            <div className={'today-event__title'}>
                <span>Сегодня</span>
            </div>
            <div className={'today-event__filters'}>
                filters
            </div>
            <SwipeEvents
                data={eventsTodayData}
                Event={EventPreviewNow}
            />
        </div>
    );
};

export default TodayEvent;